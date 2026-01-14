import { useEffect, useMemo, useState } from "react";
import { Title, Loader, Center, Stack } from "@mantine/core";

import type { Media } from "../../test/types/media";
import { getAllMedia } from "../services/media.service";

import MediaGrid from "./Media/MediaGrid";
import MediaTabs from "./Media/MediaTabs";
import MediaFilters from "./Media/MediaFilters";

export default function Media() {
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);

  const [tab, setTab] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllMedia()
      .then((res) => setMedia(res.data))
      .finally(() => setLoading(false));
  }, []);

  const filteredMedia = useMemo(() => {
    let list = [...media];

    if (tab === "movies") {
      list = list.filter((m) => m.type === "MOVIE");
    }

    if (tab === "series") {
      list = list.filter((m) => m.type === "SERIES");
    }

    if (tab === "top") {
      list = list
        .filter((m) => typeof m.rating === "number")
        .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
        .slice(0, 10);
    }

    if (search) {
      list = list.filter((m) =>
        m.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    return list;
  }, [media, tab, search]);

  if (loading) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  return (
    <Stack>
      <Title>Catalog</Title>

      <MediaTabs value={tab} onChange={setTab} />

      <MediaFilters search={search} setSearch={setSearch} />

      <MediaGrid media={filteredMedia} />
    </Stack>
  );
}
