import { useCallback } from "react";

export default function usePagination(page: number, setPage: (p: number) => void, totalPages: number) {
  const nextPage = useCallback(() => {
    if (page < totalPages) setPage(page + 1);
  }, [page, totalPages, setPage]);

  const prevPage = useCallback(() => {
    if (page > 1) setPage(page - 1);
  }, [page, setPage]);

  return { nextPage, prevPage };
}
