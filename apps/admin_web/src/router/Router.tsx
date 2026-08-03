import { Route, Routes } from "react-router-dom";

import DashBoard from "../pages/Dashboard";
import RoomGraph from "../pages/RoomGraph";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/rooms" element={<RoomGraph />} />
    </Routes>
  );
}

export default Router;
