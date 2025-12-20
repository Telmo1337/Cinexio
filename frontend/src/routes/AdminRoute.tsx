// src/routes/AdminRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { JSX } from "react";

interface AdminRouteProps {
  children: JSX.Element;
}

export const AdminRoute = ({ children }: AdminRouteProps) => {
  const { isLoggedIn, userRole } = useAuth();

  if (!isLoggedIn || userRole !== "ADMIN") return <Navigate to="/login" />;

  return children;
};
