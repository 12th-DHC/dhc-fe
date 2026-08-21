import { useLocation } from "react-router-dom";
import { GlobalStyle } from "./global/GlobalStyle";
import Sidebar from "./layout/SideBar";
import Router from "./router/Router";

import { Layout, Main } from "./styles/App.style";

export function App() {
  const { pathname } = useLocation();
  const isLoginPage = pathname === "/login";

  return (
    <>
      <GlobalStyle />
      {isLoginPage ? (
        <Router />
      ) : (
        <Layout>
          <Sidebar />
          <Main>
            <Router />
          </Main>
        </Layout>
      )}
    </>
  );
}

export default App;
