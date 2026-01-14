import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Title,
  Text,
  Image,
  Badge,
  Group,
  Card,
  Button,
  Stack,
} from "@mantine/core";
import { getMediaById } from "../../services/media.service";
import type { Media } from "../../../test/types/media";

export default function MediaDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [media, setMedia] = useState<Media | null>(null);

  useEffect(() => {
    if (id) getMediaById(id).then(setMedia);
  }, [id]);

  if (!media) return null;

  return (
    <Container size="md">
      <Group justify="space-between" mb="md">
        <Title>{media.title}</Title>

        <Button
          component={Link}
          to={`/admin/media/${media.id}/edit`}
        >
          Edit
        </Button>
      </Group>

      <Card withBorder radius="md" shadow="sm">
        <Group align="flex-start">
          <Image
            src={media.image}
            w={200}
            h={300}
            fit="cover"
            radius="md"
          />

          <Stack gap="sm">
            <Group>
              <Badge>{media.type}</Badge>
              {media.releaseYear && (
                <Badge variant="light">{media.releaseYear}</Badge>
              )}
            </Group>

            {Array.isArray(media.category) && (
              <Group gap="xs">
                {media.category.map((c) => (
                  <Badge key={c} variant="outline">
                    {c}
                  </Badge>
                ))}
              </Group>
            )}

            {media.rating !== null && (
              <Text fw={500}>⭐ Rating: {media.rating}/10</Text>
            )}

            {media.description && (
              <Text mt="sm">{media.description}</Text>
            )}
          </Stack>
        </Group>
      </Card>
    </Container>
  );
}
