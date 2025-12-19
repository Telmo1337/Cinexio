import { List, Text, Button, Group, Image } from '@mantine/core';
import useMedia from '../hooks/useMedia';
import usePagination from '../hooks/usePagination';

export default function MediaList() {
  const { media, page, totalPages, error, setPage } = useMedia();
  const { nextPage, prevPage } = usePagination(page, setPage, totalPages);

  if (error) return <Text color="red">Error: {error}</Text>;
  if (!media.length) return <Text>Loading media...</Text>;

  return (
    <>
      <List spacing="sm" size="sm" center>
        {media.map((item) => (
          <List.Item key={item.id}>
            <Text>{item.title} ({item.releaseYear})</Text>
            {item.image && <Image src={item.image} alt={item.title} width={100} />}
          </List.Item>
        ))}
      </List>

      <Group mt="md">
        <Button disabled={page <= 1} onClick={prevPage}>Previous</Button>
        <Text>Page {page} of {totalPages}</Text>
        <Button disabled={page >= totalPages} onClick={nextPage}>Next</Button>
      </Group>
    </>
  );
}
