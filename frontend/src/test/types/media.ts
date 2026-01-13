export type MediaType = "MOVIE" | "SERIES";

export interface Media {
  id: string;
  title: string;
  type: MediaType;
  category: string[];
  releaseYear: number;
  endYear?: number;
  country?: string;
  language?: string;
  director?: string;
  image?: string;
  description?: string;
  platform?: string[];
  createdAt: string;
  userId: string;
}
