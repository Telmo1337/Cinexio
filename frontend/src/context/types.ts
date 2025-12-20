// src/context/types.ts
export type User = {
  name: string;
  role: "MEMBER" | "ADMIN";
};

export type AuthContextType = {
  user: User | null;
  loading: boolean; 
  login: (userData: User) => void;
  logout: () => void;
};
