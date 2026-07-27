import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobaStyle";
import { Sidebar } from "./components/SideBar";
import { DashBoard } from "./pages/DashBoard";
import RoomGraph from "./pages/RoomGraph";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Sidebar />
        <Main>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/rooms" element={<RoomGraph />} />
          </Routes>
        </Main>
      </Layout>
    </>
  );
}

export default App;

const Layout = styled.div`
  display: flex;
  min-height: 100svh;
`;

const Main = styled.main`
  flex: 1;
  padding: 32px;
  min-width: 0;
`;
