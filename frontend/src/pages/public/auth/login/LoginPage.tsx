import LoginForm from "./LoginForm";
import type { LoginFormValues } from "./schemas/login.schema";
import useLogin from "./useLogin";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mantine/core";

import { useAuth } from "../../../../context/useAuth";
import { decodeToken } from "../../../../context/utils/decodeToken";
import LoginFooter from "./LoginFooter";


const LoginPage = () => {
  const { login: loginRequest, error } = useLogin();
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(values: LoginFormValues) {
    const data = await loginRequest(values);

    // guardar token
    localStorage.setItem("token", data.token);

    //decodificar token
    const decoded = decodeToken(data.token);
    if (!decoded) {
      throw new Error("Token inválido");
    }

    //  guardar user no contexto
    login({
      name: decoded.name,
      role: decoded.role,
    });

    // redirect por role
    navigate(decoded.role === "ADMIN" ? "/admin" : "/app");
  }

  return (
    <>
      {error && <Alert color="red">{error}</Alert>}
      <LoginForm onSubmit={handleSubmit} />
      <LoginFooter />
    </>
  );
};

export default LoginPage;
