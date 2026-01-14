import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Title, Loader, Center, Stack, Text } from "@mantine/core";
import { getPublicLibrary } from "../services/library.service";
import type { Media } from "../../test/types/media";

import MediaGrid from "./Media/MediaGrid";

export default function UserPublicProfile() {
  const { nickName } = useParams<{ nickName: string }>();

  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!nickName) return;

    getPublicLibrary(nickName)
      .then((res) => {
        // 👇 aqui o tipo já é inferido corretamente
        const publicMedia = res.library.map(item => item.media);
        setMedia(publicMedia);
      })
      .finally(() => setLoading(false));
  }, [nickName]);

  if (loading) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  return (
    <Stack>
      <Title>Library of {nickName}</Title>

      {media.length === 0 ? (
        <Text c="dimmed">This user has no public media yet.</Text>
      ) : (
        <MediaGrid media={media} />
      )}
    </Stack>
  );
}
