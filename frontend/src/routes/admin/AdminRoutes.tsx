// src/routes/AdminRoutes.tsx
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../../layouts/admin/AdminLayout";
import CreateMedia from "../../pages/admin/CreateMedia";
import { AdminRoute } from "../AdminRoute";

export default function AdminRoutes() {
  return (
    <AdminLayout>
      <Routes>
        <Route
          path="createMedia"
          element={
            <AdminRoute>
              <CreateMedia />
            </AdminRoute>
          }
        />
        {/* Outras páginas ADMIN */}
      </Routes>
    </AdminLayout>
  );
}
