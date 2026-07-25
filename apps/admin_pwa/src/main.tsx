import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
// @ts-expect-error virtual module provided by Vite PWA plugin
import { registerSW } from "virtual:pwa-register";

registerSW({
  immediate: true,
});

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
);
