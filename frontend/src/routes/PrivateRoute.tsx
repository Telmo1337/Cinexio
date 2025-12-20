// src/routes/PrivateRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { JSX } from "react";

interface PrivateRouteProps {
  children: JSX.Element;
  roles?: ("MEMBER" | "ADMIN")[];
}

export const PrivateRoute = ({ children, roles }: PrivateRouteProps) => {
  const { isLoggedIn, userRole } = useAuth();

  if (!isLoggedIn) return <Navigate to="/login" />; // redireciona se não logado
  if (roles && !roles.includes(userRole!)) return <Navigate to="/app" />; // sem permissão

  return children;
};
