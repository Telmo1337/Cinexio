import { useState } from "react";
import type { Media } from "../../../test/types/media";

export function useMediaDetails() {
  const [opened, setOpened] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<Media | null>(null);

  function open(media: Media) {
    setSelectedMedia(media);
    setOpened(true);
  }

  function close() {
    setOpened(false);
    setSelectedMedia(null);
  }

  return {
    opened,
    selectedMedia,
    open,
    close,
  };
}
