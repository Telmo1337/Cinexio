/* eslint-disable @typescript-eslint/no-unused-vars */
// src/pages/public/Login.tsx
import { useState } from "react";
import { TextInput, PasswordInput, Button, Paper, Title, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { request } from "../../../api/http";
import { useAuth } from "../../../context/useAuth";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin() {
    try {
      setError("");

      const data = await request<{ token: string }>("auth/login", {
        method: "POST",
        body: JSON.stringify({
          identifier,
          password,
        }),
      });

      // guardar token
      localStorage.setItem("token", data.token);

      // decodificar JWT
      const payload = JSON.parse(atob(data.token.split(".")[1]));

      // guardar user no contexto
      login({
        name: payload.nickName ?? payload.email,
        role: payload.role,
      });

      // redirecionar conforme role
      if (payload.role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/app");
      }
    } catch (err) {
      setError("Credenciais inválidas");
    }
  }

  return (
    <Paper w={350} p="xl" mx="auto" mt={100} withBorder>
      <Title order={2} mb="md">Login</Title>

      <TextInput
        label="Email ou Nickname"
        placeholder="ex: telmo@cinexio.pt"
        value={identifier}
        onChange={(e) => setIdentifier(e.currentTarget.value)}
        required
      />

      <PasswordInput
        label="Password"
        mt="md"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
        required
      />

      {error && (
        <Text c="red" size="sm" mt="sm">
          {error}
        </Text>
      )}

      <Button fullWidth mt="xl" onClick={handleLogin}>
        Entrar
      </Button>
    </Paper>
  );
}
