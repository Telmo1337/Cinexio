import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../src/context/useAuth";

export const AdminRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;
  if (user.role !== "ADMIN") return <Navigate to="/" />;

  return <>{children}</>;
};
