// src/routes/public/PublicRoutes.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../../pages/public/Home";
import Register from "../../pages/public/Register";
import Login from "../../pages/public/Login";
import PublicNavbar from "../../components/navigation/PublicNavbar";
import { useAuth } from "../../context/useAuth";



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
          element={<Register />}
        />

        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </PublicNavbar>
  );
}
