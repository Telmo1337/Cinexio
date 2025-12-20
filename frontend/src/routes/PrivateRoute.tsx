import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../src/context/useAuth";

export function PrivateRoute({
  children,
  roles,
}: {
  children: ReactNode;
  roles: ("MEMBER" | "ADMIN")[];
}) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />; // não logado
  if (!roles.includes(user.role)) return <Navigate to="/" />; // role não permitida

  return <>{children}</>;
}
