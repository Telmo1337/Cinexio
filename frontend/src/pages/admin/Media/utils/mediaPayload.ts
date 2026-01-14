import type { MediaPayload } from "../../../services/media.service";

export function cleanMediaPayload(values: MediaPayload): MediaPayload {
  return {
    ...values,

    rating:
      typeof values.rating === "number"
        ? Math.round(values.rating)
        : undefined,

    country: values.country || undefined,
    language: values.language || undefined,
    director: values.director || undefined,
    description: values.description || undefined,
    image: values.image || undefined,

    platform:
      Array.isArray(values.platform) && values.platform.length > 0
        ? values.platform
        : undefined,
  };
}
