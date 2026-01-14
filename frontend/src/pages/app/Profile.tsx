import { Card, Text, Title, Stack, Badge, Button, Group } from "@mantine/core";
import { useAuth } from "../../context/useAuth";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <Card withBorder radius="md" shadow="sm" maw={500}>
      <Stack>
        <Title order={3}>Perfil</Title>

        <Group>
          <Text fw={500}>Nickname:</Text>
          <Text>{user.nickName}</Text>
        </Group>

        {user.email && (
          <Group>
            <Text fw={500}>Email:</Text>
            <Text>{user.email}</Text>
          </Group>
        )}

        <Group>
          <Text fw={500}>Role:</Text>
          <Badge>{user.role}</Badge>
        </Group>

        <Button
          variant="light"
          onClick={() => navigate("/app/settings")}
        >
          Ir para Settings
        </Button>
      </Stack>
    </Card>
  );
}
