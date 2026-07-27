import { Route, Routes } from "react-router-dom";

import { GlobalStyle } from "./global/GlobalStyle";
import Sidebar from "./components/SideBar";
import DashBoard from "./pages/DashBoard";
import RoomGraph from "./pages/RoomGraph";

import { Layout, Main } from "./App.style";

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
