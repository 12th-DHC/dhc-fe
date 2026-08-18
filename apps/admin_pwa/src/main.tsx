import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
// @ts-expect-error virtual module provided by Vite PWA plugin
import { registerSW } from "virtual:pwa-register";
import { FullBox, MobileBox } from "@repo/ui";

registerSW({
  immediate: true,
});

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <FullBox>
      <MobileBox>
        <Router />
      </MobileBox>
    </FullBox>
  </BrowserRouter>,
);
