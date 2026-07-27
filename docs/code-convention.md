# Code Convention

## 폴더 구조

```
src/
  components/    # 재사용 가능한 공통 컴포넌트
  pages/         # 라우트에 연결되는 페이지 컴포넌트
  feature/       # 기능별 모듈 (widgets, slices 등)
  global/        # 전역 설정 (theme, global styles 등)
  styles/        # 전역 재사용 styled components
```

## 파일 네이밍

### styled components

styled components 파일은 **`이름.style.ts`** 네이밍을 사용한다.

```
styles/
  Box.style.ts
  Text.style.ts

components/
  Input.style.ts   # 컴포넌트 전용 styled components

packages/ui/src/components/
  Button.style.ts
  Mobile.style.ts
```

### 그 외 파일

| 구분 | 네이밍 | 예시 |
|------|--------|------|
| 컴포넌트 | PascalCase.tsx | `Input.tsx`, `LoginPage.tsx` |
| 유틸리티 | camelCase.ts | `formatDate.ts` |
| 타입 정의 | PascalCase.types.ts | `User.types.ts` |
| 상수 | UPPER_SNAKE_CASE.ts | `API_ENDPOINTS.ts` |

## styled components 위치 기준

styled components를 **어디에 둘지**는 재사용 가능성에 따라 결정한다.

| 기준 | 위치 | 예시 |
|------|------|------|
| 2개 이상의 컴포넌트에서 재사용 | `styles/` 폴더 | `Box.style.ts`, `Text.style.ts` |
| 특정 컴포넌트 전용 | 해당 컴포넌트 옆 | `Input.style.ts` |
| 공통 UI 라이브러리 | `packages/ui/` | `Button.style.ts` |

## import 규칙

```tsx
// 1. React
import { useState, useEffect } from "react";

// 2. 외부 라이브러리
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

// 3. 공통 스타일 (styles/ 폴더)
import { FullCenterdBox } from "../styles/Box.style";
import { TitleText } from "../styles/Text.style";

// 4. 공통 컴포넌트
import Input from "../components/Input";
import { Button } from "@repo/ui";

// 5. 로컬 유틸/타입
import { formatDate } from "../utils/formatDate";
import type { UserProps } from "../types/User.types";
```

## 컴포넌트 규칙

- Props 인터페이스는 `React.InputHTMLAttributes` 같은 부모 인터페이스를 확장할 때 **`Omit`**을 사용하여 충돌을 피한다.
- 상태 관리 콜백은 **`onChange: (value: T) => void`** 형태로 받는다. 구체적인 상태관리(setState 등)는 부모가 결정한다.
- 컴포넌트 파일명은 PascalCase, export는 default export를 사용한다.
