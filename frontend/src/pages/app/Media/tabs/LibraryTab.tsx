import { Button, Group, Text } from "@mantine/core";

type Props = {
  mediaId: string;
};

export default function LibraryTab({ mediaId }: Props) {
  function handleAddToLibrary() {
    console.log("Add media to library:", mediaId);
    // depois liga:
    // POST /library/:mediaId
  }

  function handleMarkWatched() {
    console.log("Mark as watched:", mediaId);
    // PUT /library/:mediaId
  }

  return (
    <>
      <Text mb="sm">
        Personal CINEXIO Library (watched, favorite, rating)
      </Text>

      <Group>
        <Button variant="light" onClick={handleAddToLibrary}>
          Add to Library
        </Button>

        <Button variant="subtle" onClick={handleMarkWatched}>
          Mark as Watched
        </Button>
      </Group>
    </>
  );
}
