/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import type { Media } from "../types/media";
import { getAllMedia } from "../../api/mediaServices";

interface UseMediaReturn {
  media: Media[];
  page: number;
  totalPages: number;
  error: string | null;
  setPage: (page: number) => void;
  loading: boolean;
}

export default function useMedia(initialPage = 1, pageSize = 10): UseMediaReturn {
  const [media, setMedia] = useState<Media[]>([]);
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchMedia = async (currentPage: number) => {
    setLoading(true);
    try {
      const res = await getAllMedia({ page: currentPage, pageSize });
      setMedia(res.data);
      setPage(res.page);
      setTotalPages(res.totalPages);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  // Sempre que a página mudar, busca os dados
  useEffect(() => {
    fetchMedia(page);
  }, [page]);

  return { media, page, totalPages, error, setPage, loading };
}
