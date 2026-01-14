import { Text } from "@mantine/core";

export default function CommentsTab({ mediaId }: { mediaId: string }) {
  return (
    <Text c="dimmed">
      Comentários para media #{mediaId} (ligar ao backend depois)
    </Text>
  );
}
