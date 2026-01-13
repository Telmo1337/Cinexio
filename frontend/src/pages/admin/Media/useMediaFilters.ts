import { useMemo, useState } from "react";
import type { Media } from "../../../test/types/media";

export function useMediaFilters(media: Media[]) {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<"MOVIE" | "SERIES" | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [yearFilter, setYearFilter] = useState<number | undefined>(undefined);


  const filteredMedia = useMemo(() => {
    return media.filter((m) => {
      const matchesTitle = m.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesType = !typeFilter || m.type === typeFilter;

      const matchesCategory =
        !categoryFilter || m.category?.includes(categoryFilter);

      const matchesYear =
        !yearFilter || m.releaseYear === yearFilter;

      return (
        matchesTitle &&
        matchesType &&
        matchesCategory &&
        matchesYear
      );
    });
  }, [media, search, typeFilter, categoryFilter, yearFilter]);

  function resetFilters() {
    setSearch("");
    setTypeFilter(null);
    setCategoryFilter(null);
    setYearFilter(undefined);
  }

  return {
    // dados
    filteredMedia,

    // estados
    search,
    typeFilter,
    categoryFilter,
    yearFilter,

    // setters
    setSearch,
    setTypeFilter,
    setCategoryFilter,
    setYearFilter,

    // ações
    resetFilters,
  };
}
