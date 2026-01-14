import { Card, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

type Props = {
  label: string;
  value: string | number;
  to?: string;
};

export default function StatCard({ label, value, to }: Props) {
  const navigate = useNavigate();

  return (
    <Card
      withBorder
      padding="md"
      style={{ cursor: to ? "pointer" : "default" }}
      onClick={() => to && navigate(to)}
    >
      <Text size="sm" c="dimmed">
        {label}
      </Text>
      <Text size="xl" fw={700}>
        {value}
      </Text>
    </Card>
  );
}
