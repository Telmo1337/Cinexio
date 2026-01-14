import { Card, Text, Title } from "@mantine/core";

type Props = {
  label: string;
  value: number | string;
};

export default function StatCard({ label, value }: Props) {
  return (
    <Card withBorder>
      <Text size="sm" c="dimmed">
        {label}
      </Text>
      <Title>{value}</Title>
    </Card>
  );
}