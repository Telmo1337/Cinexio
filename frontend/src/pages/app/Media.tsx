import { useEffect, useState } from "react";
import { Title, Loader, Center, Stack } from "@mantine/core";

import type { Media } from "../../test/types/media";
import { getAllMedia } from "../services/media.service";
import MediaGrid from "./Media/MediaGrid";


export default function Media() {
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllMedia()
      .then((res) => setMedia(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  return (
    <Stack>
      <Title>Catálogo</Title>
      <MediaGrid media={media} />
    </Stack>
  );
}
