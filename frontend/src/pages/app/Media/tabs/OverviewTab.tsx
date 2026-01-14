import { Card, Text, Group, Badge, Image, Stack } from "@mantine/core";
import type { Media } from "../../../../test/types/media";


export default function OverviewTab({ media }: { media: Media }) {
  return (
    <Card withBorder>
      <Group align="flex-start">
        {media.image && (
          <Image src={media.image} w={180} radius="md" />
        )}

        <Stack>
          <Text fw={600}>{media.title}</Text>
          <Text size="sm" c="dimmed">
            {media.releaseYear}
            {media.endYear ? ` – ${media.endYear}` : ""}
          </Text>

          <Group gap="xs">
            {media.category.map((c) => (
              <Badge key={c} variant="light">
                {c}
              </Badge>
            ))}
          </Group>

          <Text mt="sm">{media.description}</Text>
        </Stack>
      </Group>
    </Card>
  );
}
