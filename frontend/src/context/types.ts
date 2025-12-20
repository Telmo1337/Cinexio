export type User = {
  name: string;
  role: "MEMBER" | "ADMIN";
};

export type AuthContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
};
