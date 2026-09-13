import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// @ts-expect-error virtual module provided by Vite PWA plugin
import { registerSW } from "virtual:pwa-register";
import { FullBox, MobileBox } from "@repo/ui";

registerSW({
  immediate: true,
});

// 캐싱, 훅 등 전역 상태 관리할 때 쓰는거래요
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <FullBox>
        <MobileBox>
          <Router />
        </MobileBox>
      </FullBox>
    </BrowserRouter>
  </QueryClientProvider>,
);