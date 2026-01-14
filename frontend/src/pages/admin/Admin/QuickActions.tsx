
import { Button, Group } from "@mantine/core";
import { Link } from "react-router-dom";

export default function QuickActions() {
  return (
    <Group>
      <Button component={Link} to="/admin/create-media">
        Create New Media
      </Button>

      <Button component={Link} to="/admin/media" variant="light">
        Manage Media
      </Button>

      <Button component={Link} to="/app" variant="subtle">
        See all the Catalog
      </Button>
    </Group>
  );
}
