import { type ReactNode, useState } from "react";
import type { AuthUser } from "./types";
import { AuthContext } from "./AuthContext";
import { decodeToken } from "./utils/decodeToken";

function getInitialUser(): AuthUser | null {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const decoded = decodeToken(token);

  if (!decoded?.nickName || !decoded?.role) return null;

  return {
    nickName: decoded.nickName,
    role: decoded.role,
  };
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(getInitialUser);
  const [loading] = useState(false);

  const login = (userData: AuthUser) => {
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
