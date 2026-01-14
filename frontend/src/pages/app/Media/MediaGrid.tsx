import { SimpleGrid } from "@mantine/core";

import MediaCard from "./MediaCard";
import type { Media } from "../../../test/types/media";

type Props = {
  media: Media[];
};

export default function MediaGrid({ media }: Props) {
  return (
    <SimpleGrid cols={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing="md">
      {media.map((m) => (
        <MediaCard key={m.id} media={m} />
      ))}
    </SimpleGrid>
  );
}
