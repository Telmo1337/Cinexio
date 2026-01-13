import { request } from "../../api/http";
import type { Media } from "../../test/types/media";

export type MediaPayload = Omit<
  Media,
  "id" | "createdAt" | "userId"
>;


export const getAllMedia = async (): Promise<{ data: Media[] }> => {
  return request("media");
};

export const getMediaById = async (id: string): Promise<Media> => {
  return request(`media/${id}`);
};

export const createMedia = async (data: MediaPayload): Promise<Media> => {
  return request("media", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const updateMedia = async (
  id: string,
  data: MediaPayload
): Promise<Media> => {
  return request(`media/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
};

export const deleteMedia = async (id: string): Promise<void> => {
  return request(`media/${id}`, {
    method: "DELETE",
  });
};
