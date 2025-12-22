import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { RegisterFormValues } from "./schemas/register.schema";
import { registerRequest } from "../../../../api/authServices";

export default function useRegister() {
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  async function register(values: RegisterFormValues) {
    try {

      setError(null);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { confirmPassword: _confirmPassword, ...payload } = values;

      await registerRequest(payload);

      navigate("/login");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Register failed");
      }
    } 
  }

  return { register, error };
}
