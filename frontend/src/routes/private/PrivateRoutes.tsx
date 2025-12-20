// src/routes/private/PrivateRoutes.tsx
import { Routes, Route } from "react-router-dom";
import Movies from "../../pages/app/Movies";
import Profile from "../../pages/app/Profile";
import Settings from "../../pages/app/Settings";
import { PrivateRoute } from "../PrivateRoute";
import UserNavbar from "../../components/navigation/UserNavbar";

export default function PrivateRoutes() {
  return (
    <UserNavbar>
      <Routes>
        {/* /app */}
        <Route
          index
          element={
            <PrivateRoute roles={["MEMBER"]}>
              <Movies />
            </PrivateRoute>
          }
        />

        {/* /app/profile */}
        <Route
          path="profile"
          element={
            <PrivateRoute roles={["MEMBER"]}>
              <Profile />
            </PrivateRoute>
          }
        />

        {/* /app/settings */}
        <Route
          path="settings"
          element={
            <PrivateRoute roles={["MEMBER"]}>
              <Settings />
            </PrivateRoute>
          }
        />
      </Routes>
    </UserNavbar>
  );
}
