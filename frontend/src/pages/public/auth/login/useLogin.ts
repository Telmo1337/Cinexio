//logica (fetch, state)
import { useState } from "react";

import type { LoginFormValues } from "./schemas/login.schema";

type LoginResponse = {
  token: string;
};

export default function useLogin() {
  const [error, setError] = useState<string | null>(null);

  async function login(data: LoginFormValues): Promise<LoginResponse> {
    try {
      setError(null);

      //fazer login
      const res = await fetch("http://localhost:5050/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      //verificar se deu erro
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Login failed");
      }

      return (await res.json()) as LoginResponse;

      
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Login failed");
      }
      throw err;
    }
  }

  return { login, error };
}
