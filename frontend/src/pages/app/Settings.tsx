import { Card, Title, Stack, Button, Divider } from "@mantine/core";
import { useAuth } from "../../context/useAuth";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/", { replace: true });
  }

  return (
    <Card withBorder radius="md" shadow="sm" maw={500}>
      <Stack>
        <Title order={3}>Definições</Title>

        {/* espaço para futuras opções */}
        <Divider />

        <Button color="red" onClick={handleLogout}>
          Logout
        </Button>
      </Stack>
    </Card>
  );
}
