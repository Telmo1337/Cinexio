// src/api/http.ts
const baseUrl = "http://localhost:5050/api/v1";

export async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {

  const token = localStorage.getItem("token");

  const response = await fetch(`${baseUrl}/${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  return response.json() as Promise<T>;
}
