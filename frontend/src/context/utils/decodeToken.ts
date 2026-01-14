type DecodedToken = {
  nickName: string;
  email?: string;
  role: "MEMBER" | "ADMIN";
  exp?: number;
};

export function decodeToken(token: string) {
  try {
    const payload = token.split(".")[1];
    const decoded = JSON.parse(atob(payload)) as DecodedToken;

    if (!decoded.nickName || !decoded.role) {
      return null;
    }

    return {
      nickName: decoded.nickName,
      role: decoded.role,
    };
  } catch {
    return null;
  }
}
