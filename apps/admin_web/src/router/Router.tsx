import { Route, Routes } from "react-router-dom";

import DashBoard from "../pages/DashBoard";
import RoomGraph from "../pages/RoomGraph";
import EmailManage from "../pages/EmailManage";
import Setting from "../pages/Setting";
import Login from "../pages/Login";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/rooms" element={<RoomGraph />} />
      <Route path="/emails" element={<EmailManage />} />
      <Route path="/settings" element={<Setting />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Router;
