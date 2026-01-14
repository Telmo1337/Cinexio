import { TextInput, Group} from "@mantine/core";

type Props = {
  search: string;
  setSearch: (v: string) => void;
};

export default function MediaFilters({ search, setSearch }: Props) {
  return (
    <Group>
      <TextInput
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
    </Group>
  );
}
