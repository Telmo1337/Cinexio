import { Button, Group, Stack, Text } from "@mantine/core";
import { request } from "../../../../api/http";
import { useState } from "react";


export default function LibraryTab({ mediaId }: { mediaId: string }) {

  const [loading, setLoading] = useState(false);

  async function addToLibrary() {
    if (loading) return;

    setLoading(true);
    try {
      await request(`library/${mediaId}`, { method: "POST" });
      alert("Added to your library");
    } finally {
      setLoading(false);
    }
  }

  async function markWatched() {
    await request(`library/${mediaId}`, {
      method: "PUT",
      body: JSON.stringify({ watched: true }),
    });
    alert("Marked as watched (now public)");
  }

  async function addFavorite() {
    await request(`library/${mediaId}`, {
      method: "PUT",
      body: JSON.stringify({ favorite: true }),
    });
    alert("Added to favorites (now public)");
  }

  return (
    <Stack>
      <Text c="dimmed">
        Only watched, rated or favorited media is visible on your public profile.
      </Text>

      <Group>
        <Button variant="light" onClick={addToLibrary} disabled={loading}>
          Add to Library
        </Button>

        <Button onClick={markWatched}>
          Mark as Watched
        </Button>

        <Button variant="subtle" onClick={addFavorite}>
          Favorite
        </Button>
      </Group>
    </Stack>
  );
}
