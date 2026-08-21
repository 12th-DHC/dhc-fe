<div align="center">

# 🧹 DHC-FE

**기숙사 청소 체크 서비스 프론트엔드**

관리자와 학생이 함께 사용하는 기숙사 청소 확인 · 통계 · 알림 시스템입니다.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Turborepo](https://img.shields.io/badge/Turborepo-2-EF4444?logo=turborepo&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-9-F69220?logo=pnpm&logoColor=white)
![Emotion](https://img.shields.io/badge/Emotion-11-C43BEB?logo=emotion&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-enabled-5A0FC8?logo=pwa&logoColor=white)

</div>

---

## 📦 프로젝트 구조

```
dhc-fe
├─ apps/
│  ├─ admin_web/     # 관리자 웹 (대시보드 · 호실 통계 · 이메일 관리)
│  ├─ admin_pwa/     # 관리자 PWA (모바일 관리)
│  └─ user_pwa/      # 학생용 PWA (청소 체크)
├─ packages/
│  ├─ ui/            # 공유 UI 컴포넌트 · 테마 (@repo/ui)
│  └─ eslint-config/ # 공유 ESLint 설정 (@repo/eslint-config)
└─ docs/             # 문서 (코드 컨벤션 등)
```

### Apps

| 앱 | 설명 | 주요 기술 |
| --- | --- | --- |
| `admin_web` | 관리자 웹 대시보드 | React · Emotion · React Router |
| `admin_pwa` | 관리자 모바일 PWA | React · PWA(Workbox) · react-icons |
| `user_pwa` | 학생용 모바일 PWA | React · PWA(vite-plugin-pwa) |

### Packages

| 패키지 | 설명 |
| --- | --- |
| `@repo/ui` | 앱 전역에서 공유하는 UI 컴포넌트 · 컬러 테마 |
| `@repo/eslint-config` | 앱별로 공유하는 ESLint 설정 |


---

## 🚀 시작하기

> Node.js `>= 18`, `pnpm@9` 가 필요합니다.

```sh
# 1. 의존성 설치
pnpm install

# 2. 전체 앱 개발 서버 실행
pnpm dev
```

특정 앱만 실행하려면 필터를 사용하세요.

```sh
pnpm dev --filter=admin_web   # 관리자 웹
pnpm dev --filter=admin_pwa   # 관리자 PWA
pnpm dev --filter=user_pwa    # 학생용 PWA
```

---

## 🛠 스크립트

루트에서 아래 명령어로 전체 워크스페이스를 제어할 수 있습니다.

| 명령어 | 설명 |
| --- | --- |
| `pnpm dev` | 전체 앱 개발 서버 실행 |
| `pnpm build` | 전체 앱 프로덕션 빌드 |
| `pnpm lint` | 전체 워크스페이스 ESLint 검사 |
| `pnpm format` | Prettier 포맷팅 |
| `pnpm check-types` | 전체 타입 검사 |

---

## 📐 컨벤션

- 코드 컨벤션은 [docs/code-convention.md](docs/code-convention.md)를 따릅니다.
- 커밋 메시지는 Conventional Commits를 사용합니다.

  ```
  feat(admin_web): 호실 통계 페이지 추가
  fix(user_pwa): 저장 버튼 활성화 로직 수정
  ```

- 브랜치는 `feature/#이슈번호` 형식으로 생성합니다.

---

<div align="center">

Made with 💜 by **XQUARE-12th**

</div>
