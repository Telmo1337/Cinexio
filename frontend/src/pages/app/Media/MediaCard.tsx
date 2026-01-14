import { Card, Image, Text, Badge, Group, Stack } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import type { Media } from "../../../test/types/media";

type Props = {
  media: Media;
};

export default function MediaCard({ media }: Props) {
  const navigate = useNavigate();

  return (
    <Card
      withBorder
      shadow="sm"
      padding="sm"
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/app/media/${media.id}`)}
    >
      <Card.Section>
        <Image
          src={media.image || "https://via.placeholder.com/300x450"}
          height={260}
          alt={media.title}
        />
      </Card.Section>

      <Stack gap={4} mt="sm">
        <Group justify="space-between">
          <Text fw={600} lineClamp={1}>
            {media.title}
          </Text>
          <Badge variant="light">{media.type}</Badge>
        </Group>

        <Text size="sm" c="dimmed">
          {media.releaseYear}
          {media.endYear ? ` – ${media.endYear}` : ""}
        </Text>

        {media.rating && (
          <Text size="sm">⭐ {media.rating.toFixed(1)}</Text>
        )}
      </Stack>
    </Card>
  );
}
