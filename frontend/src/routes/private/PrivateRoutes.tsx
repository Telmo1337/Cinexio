// src/routes/PrivateRoutes.tsx
import { Routes, Route } from "react-router-dom";
import UserLayout from "../../layouts/user/UserLayout";
import Movies from "../../pages/app/Movies";
import { PrivateRoute } from "../PrivateRoute";

export default function PrivateRoutes() {
  return (
    <UserLayout>
      <Routes>
        <Route
          path="movies"
          element={
            <PrivateRoute roles={["MEMBER", "ADMIN"]}>
              <Movies />
            </PrivateRoute>
          }
        />
        {/* Outras páginas MEMBER+ADMIN */}
      </Routes>
    </UserLayout>
  );
}
