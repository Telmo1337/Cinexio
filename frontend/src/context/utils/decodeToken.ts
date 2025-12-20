type DecodedToken = {
  nickName?: string;
  email?: string;
  role: "MEMBER" | "ADMIN";
};

export function decodeToken(token: string) {
  try {
    const payload = token.split(".")[1];
    const decoded = JSON.parse(atob(payload)) as DecodedToken;

    return {
      name: decoded.nickName ?? decoded.email ?? "User",
      role: decoded.role,
    };
  } catch {
    return null;
  }
}
