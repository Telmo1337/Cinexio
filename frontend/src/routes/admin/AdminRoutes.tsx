// src/routes/admin/AdminRoutes.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import AdminNavbar from "../../components/navigation/AdminNavbar";
import AdminDashboard from "../../pages/admin/AdminDashboard";
import CreateMedia from "../../pages/admin/CreateMedia";
import Profile from "../../pages/admin/Profile";

export default function AdminRoutes() {
  const { user } = useAuth();

  // não logado
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  //não é admin
  if (user.role !== "ADMIN") {
    return <Navigate to="/app" replace />;
  }

  return (
    <AdminNavbar>
      <Routes>
        <Route index element={<AdminDashboard />} />
        <Route path="create-media" element={<CreateMedia />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </AdminNavbar>
  );
}
