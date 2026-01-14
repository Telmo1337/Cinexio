export type ProfileUser = {
  updatedAt: string;
  id: string;
  firstName: string;
  lastName: string;
  nickName: string;
  avatar?: string | null;
  bio?: string | null;
  preferences?: Record<string, unknown> | null;
  language?: string | null;
  privacy: "PUBLIC" | "FRIENDS" | "PRIVATE";
  createdAt: string;
};
