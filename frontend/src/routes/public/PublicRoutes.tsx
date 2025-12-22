// src/routes/public/PublicRoutes.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../../pages/public/Home";
import PublicNavbar from "../../components/navigation/PublicNavbar";
import { useAuth } from "../../context/useAuth";
import LoginPage from "../../pages/public/auth/login/LoginPage";
import RegisterPage from "../../pages/public/auth/register/RegisterPage";



export default function PublicRoutes() {

  const { user } = useAuth();

  if (user) {
    return (
      <Navigate
        to={user.role === "ADMIN" ? "/admin" : "/app"}
        replace
      />
    );
  }


  return (
    <PublicNavbar>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/signup"
          element={<RegisterPage />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        {/*catch-all*/}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </PublicNavbar>
  );
}
