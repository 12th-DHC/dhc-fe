import { Route, Routes } from "react-router-dom";

import DashBoard from "../pages/DashBoard";
import RoomGraph from "../pages/RoomGraph";
import EmailManage from "../pages/EmailManage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/rooms" element={<RoomGraph />} />
      <Route path="/emails" element={<EmailManage />} />
    </Routes>
  );
}

export default Router;
