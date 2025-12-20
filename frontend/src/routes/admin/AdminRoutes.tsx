// src/routes/admin/AdminRoutes.tsx
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../../pages/admin/AdminDashboard";

import { PrivateRoute } from "../PrivateRoute";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route
        path=""
        element={
          <PrivateRoute roles={["ADMIN"]}>
            <AdminDashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
