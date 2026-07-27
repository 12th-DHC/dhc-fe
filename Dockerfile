# syntax=docker/dockerfile:1

# Base
FROM node:22-alpine AS base

RUN apk add --no-cache libc6-compat
RUN corepack enable

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# turbo 버전을 build-arg로 바꿀 수 있게 파라미터화
ARG TURBO_VERSION=2.10.6
# pnpm add -g는 PNPM_HOME/bin PATH 설정 문제로 실패할 수 있어 npm 전역 설치 사용
# (turbo는 독립 실행형 바이너리라 npm으로 설치해도 pnpm 프로젝트 빌드에 영향 없음)
RUN npm install -g turbo@${TURBO_VERSION}

WORKDIR /app

# Pruner
FROM base AS pruner

COPY . .

ARG APP

# 전역 설치된 turbo 사용 (pnpm dlx 금지)
RUN turbo prune ${APP} --docker

# Installer
FROM base AS installer

# package.json들만 복사 (Docker Layer Cache 유지 핵심)
COPY --from=pruner /app/out/json/ .

# lockfile
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

# turbo prune 버전에 따라 out/json에 workspace 설정이 누락될 수 있어
# pruner의 원본 소스에서 안전하게 직접 복사 (workspace:* 의존성 resolve 보장)
COPY --from=pruner /app/pnpm-workspace.yaml ./pnpm-workspace.yaml

# BuildKit Cache: pnpm 다운로드 캐시 (Docker Layer Cache와 별개로 유지)
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

# Builder
FROM base AS builder

ARG APP

# Remote Cache 확장 포인트 (미설정 시 빈 값 → turbo가 자동으로 로컬 캐시만 사용)
# TURBO_API/TURBO_TEAM은 민감정보가 아니므로 build-arg로 받고,
# TURBO_TOKEN은 이미지 레이어에 남지 않도록 BuildKit secret mount로 받는다.
ARG TURBO_API
ARG TURBO_TEAM
ENV TURBO_API=${TURBO_API}
ENV TURBO_TEAM=${TURBO_TEAM}

COPY --from=installer /app/node_modules ./node_modules
COPY --from=pruner /app/out/full/ .

RUN --mount=type=secret,id=turbo_token,required=false \
    export TURBO_TOKEN=$(cat /run/secrets/turbo_token 2>/dev/null || true) && \
    turbo build --filter=${APP}

# Runner
FROM nginx:1.29-alpine AS runner

ARG APP

COPY --from=builder /app/apps/${APP}/dist \
    /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]