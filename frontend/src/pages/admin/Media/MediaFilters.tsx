import {
    TextInput,
    Select,
    NumberInput,
    Group,
    Button,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

interface MediaFiltersProps {
    search: string;
    typeFilter: "MOVIE" | "SERIES" | null;
    categoryFilter: string | null;
    yearFilter: number | undefined;



    setSearch: (value: string) => void;
    setTypeFilter: (value: "MOVIE" | "SERIES" | null) => void;
    setCategoryFilter: (value: string | null) => void;
    setYearFilter: (value: number | undefined) => void;

    onReset: () => void;
}

export default function MediaFilters({
    search,
    typeFilter,
    categoryFilter,
    yearFilter,
    setSearch,
    setTypeFilter,
    setCategoryFilter,
    setYearFilter,
    onReset,
}: MediaFiltersProps) {
    return (
        <Group mb="md" grow>
            <TextInput
                placeholder="Search by title"
                leftSection={<IconSearch size={16} />}
                value={search}
                onChange={(e) => setSearch(e.currentTarget.value)}
            />

            <Select
                placeholder="Type"
                clearable
                data={[
                    { value: "MOVIE", label: "Movie" },
                    { value: "SERIES", label: "Series" },
                ]}
                value={typeFilter}
                onChange={(v) =>
                    setTypeFilter(v as "MOVIE" | "SERIES" | null)
                }
            />

            <Select
                placeholder="Category"
                clearable
                data={[
                    "Action",
                    "Drama",
                    "Comedy",
                    "Sci-Fi",
                    "Thriller",
                    "Romance",
                    "Animation",
                ]}
                value={categoryFilter}
                onChange={setCategoryFilter}
            />

            <NumberInput
                placeholder="Year"
                min={1900}
                max={new Date().getFullYear()}
                value={yearFilter}
                onChange={(value) =>
                    setYearFilter(typeof value === "number" ? value : undefined)
                }
            />


            <Button variant="light" onClick={onReset}>
                Clear Filters
            </Button>
        </Group>
    );
}
