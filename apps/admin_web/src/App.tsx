import { GlobalStyle } from "./global/GlobalStyle";
import Sidebar from "./layout/SideBar";
import Router from "./router/Router";

import { Layout, Main } from "./styles/App.style";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Sidebar />
        <Main>
          <Router />
        </Main>
      </Layout>
    </>
  );
}

export default App;
