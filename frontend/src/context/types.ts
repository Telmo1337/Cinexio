export type AuthUser = {
  id?: string;
  nickName: string;
  email?: string;
  role: "MEMBER" | "ADMIN";
};

export type AuthContextType = {
  user: AuthUser | null;
  loading: boolean;
  login: (userData: AuthUser) => void;
  logout: () => void;
};
