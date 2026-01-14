export type MediaType = "MOVIE" | "SERIES";

export interface Media {
  id: string;
  title: string;
  type: "MOVIE" | "SERIES";
  category: string[];
  releaseYear: number;
  endYear?: number;
  country?: string;
  language?: string;
  director?: string;
  image?: string;
  description?: string;
  platform?: string[];
  rating?: number;          
  createdAt: string;
  userId: string;
}
