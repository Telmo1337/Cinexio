// src/context/AuthProvider.tsx
import { type ReactNode, useState } from "react";
import type { User } from "./types";
import { AuthContext } from "./AuthContext";
import { decodeToken } from "./utils/decodeToken";

function getInitialUser(): User | null {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const decoded = decodeToken(token);
  return decoded ?? null;
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(getInitialUser);
  const [loading] = useState(false); // já não é necessário

  const login = (userData: User) => {
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
