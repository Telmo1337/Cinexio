
import { Button, Group } from "@mantine/core";
import { Link } from "react-router-dom";

export default function QuickActions() {
  return (
    <Group>
      <Button component={Link} to="/admin/create-media">
        Criar Media
      </Button>

      <Button component={Link} to="/admin/media" variant="light">
        Gerir Media
      </Button>

      <Button component={Link} to="/app" variant="subtle">
        Ver catálogo público
      </Button>
    </Group>
  );
}
