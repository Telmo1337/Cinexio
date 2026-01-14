import { request } from "../../api/http";
import type { Media } from "../../test/types/media";

export type PublicLibraryItem = {
  watched: boolean;
  favorite: boolean;
  rating: number | null;
  media: Media;
};

export type PublicLibraryResponse = {
  user: string;
  count: number;
  library: PublicLibraryItem[];
};

export function getPublicLibrary(nickName: string) {
  return request<PublicLibraryResponse>(
    `library/user/${nickName}`,
    { method: "GET" }
  );
}
