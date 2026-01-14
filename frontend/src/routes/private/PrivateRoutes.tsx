// src/routes/private/PrivateRoutes.tsx
import { Routes, Route } from "react-router-dom";

import Profile from "../../pages/app/Profile";
import Settings from "../../pages/app/Settings";
import { PrivateRoute } from "../PrivateRoute";
import MediaDetails from "../../pages/app/Media/MediaDetails";
import AppLayout from "../../components/AppLayout";
import Media from "../../pages/app/Media";
import UserPublicProfile from "../../pages/app/UserPublicProfile";
import UserSearch from "../../pages/app/UserSearch";

export default function PrivateRoutes() {
  return (
    <AppLayout>
      <Routes>


        {/* /app */}
        <Route
          index
          element={
            <PrivateRoute roles={["MEMBER", "ADMIN"]}>
              <Media />
            </PrivateRoute>
          }
        />
        {/* /app/media/:id */}
        <Route
          path="media/:id"
          element={
            <PrivateRoute roles={["MEMBER", "ADMIN"]}>
              <MediaDetails />
            </PrivateRoute>
          }
        />


        {/* /app/profile */}
        <Route
          path="profile"
          element={
            <PrivateRoute roles={["MEMBER", "ADMIN"]}>
              <Profile />
            </PrivateRoute>
          }
        />

        {/* /app/settings */}
        <Route
          path="settings"
          element={
            <PrivateRoute roles={["MEMBER", "ADMIN"]}>
              <Settings />
            </PrivateRoute>
          }
        />


         {/* procurar utilizadores */}
        <Route
          path="users"
          element={
            <PrivateRoute roles={["MEMBER", "ADMIN"]}>
              <UserSearch />
            </PrivateRoute>
          }
        />

        {/* perfil público */}
        <Route
          path="users/:nickName"
          element={
            <PrivateRoute roles={["MEMBER", "ADMIN"]}>
              <UserPublicProfile />
            </PrivateRoute>
          }
        />
      </Routes>
    </AppLayout>
  );
}
