import { Route, Routes } from "react-router-dom";

import DashBoard from "../pages/DashBoard";
import RoomGraph from "../pages/RoomGraph";
import EmailManage from "../pages/EmailManage";
import CheckManage from "../pages/CheckManage";
import Setting from "../pages/Setting";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashBoard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/rooms"
        element={
          <ProtectedRoute>
            <RoomGraph />
          </ProtectedRoute>
        }
      />
      <Route
        path="/emails"
        element={
          <ProtectedRoute>
            <EmailManage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/check"
        element={
          <ProtectedRoute>
            <CheckManage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Setting />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Router;
