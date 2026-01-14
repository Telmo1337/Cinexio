import { request } from "../../api/http";
import type { ProfileUser } from "../../test/types/user";

export type UsersResponse = {
  page: number;
  pageSize: number;
  totalUsers: number;
  totalPages: number;
  count: number;
  data: {
    id: string;
    firstName: string;
    lastName: string;
    nickName: string;
    email: string;
    createdAt: string;
  }[];
};
// ADMIN – listar todos os utilizadores
export function getAllUsers(page = 1, pageSize = 10) {
  return request<UsersResponse>(`users?page=${page}&pageSize=${pageSize}`);
}

export function getMyProfile() {
  return request<ProfileUser>("users/me", {
    method: "GET",
  });
}

export function updateProfile(data: {
  bio?: string;
  language?: string;
  preferences?: Record<string, unknown> | null;
}) {
  return request("users/profile", {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export function updatePrivacy(privacy: "PUBLIC" | "FRIENDS" | "PRIVATE") {
  return request("users/privacy", {
    method: "PUT",
    body: JSON.stringify({ privacy }),
  });
}

export function updateAvatar(avatar: string | null) {
  return request("users/avatar", {
    method: "PUT",
    body: JSON.stringify({ avatar }),
  });
}
