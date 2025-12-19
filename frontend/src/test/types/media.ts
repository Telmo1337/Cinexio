
export type MediaType = "MOVIE" | "SERIES";

export interface Media {
    id: string;
    title: string;
    type: MediaType;
    category?: string;
    releaseYear: number;
    endYear?: number;
    country?: string;
    language?: string;
    director?: string;
    image?: string;
    rating?: number;
    description?: string;
    platforms?: string[];
    createdAt: string;
    updatedAt?: string;
    userId: string;
}