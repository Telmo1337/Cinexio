import type { ReactNode } from "react";
import AdminNavbar from "./navigation/AdminNavbar";
import UserNavbar from "./navigation/UserNavbar";
import { useAuth } from "../context/useAuth";


export default function AppLayout({ children }: { children: ReactNode }) {
  const { user } = useAuth();

  if (!user) return null;

  if (user.role === "ADMIN") {
    return <AdminNavbar>{children}</AdminNavbar>;
  }

  return <UserNavbar>{children}</UserNavbar>;
}
