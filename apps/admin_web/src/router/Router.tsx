import { Route, Routes } from "react-router-dom";

import DashBoard from "../pages/DashBoard";
import RoomGraph from "../pages/RoomGraph";
import EmailManage from "../pages/EmailManage";
import Setting from "../pages/Setting";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/rooms" element={<RoomGraph />} />
      <Route path="/emails" element={<EmailManage />} />
      <Route path="/settings" element={<Setting />} />
    </Routes>
  );
}

export default Router;
