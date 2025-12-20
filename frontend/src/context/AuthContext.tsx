/* eslint-disable react-refresh/only-export-components */
// src/context/AuthContext.tsx
import { createContext, useContext, useState } from "react";
import type {ReactNode} from "react";


interface AuthContextType {
  userRole: "ADMIN" | "MEMBER" | null;
  isLoggedIn: boolean;
  login: (role: "ADMIN" | "MEMBER") => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userRole, setUserRole] = useState<"ADMIN" | "MEMBER" | null>(null);

  const login = (role: "ADMIN" | "MEMBER") => setUserRole(role);
  const logout = () => setUserRole(null);

  const isLoggedIn = userRole !== null;

  return (
    <AuthContext.Provider value={{ userRole, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook para usar AuthContext facilmente
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
