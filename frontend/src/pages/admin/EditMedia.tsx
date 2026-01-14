import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Title,  Container } from "@mantine/core";
import {
  getMediaById,
  updateMedia,
} from "../services/media.service";
import MediaForm from "../admin/Media/MediaForm";
import type { MediaPayload } from "../services/media.service";
import type { Media } from "../../test/types/media";
import { cleanMediaPayload } from "./Media/utils/mediaPayload";

export default function EditMedia() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [media, setMedia] = useState<Media | null>(null);

  useEffect(() => {
    if (id) getMediaById(id).then(setMedia);
  }, [id]);

async function handleSubmit(values: MediaPayload) {
  if (!id) return;

  const payload = cleanMediaPayload(values);

  console.log("FRONTEND SENT:", payload);

  await updateMedia(id, payload);
  navigate("/admin/media");
}


  if (!media) return null;

  const initialValues: MediaPayload = {
    title: media.title ?? "",
    type: media.type ?? "MOVIE",

    category: Array.isArray(media.category) ? media.category : [],

    releaseYear: media.releaseYear ?? new Date().getFullYear(),
    endYear: media.endYear ?? undefined,

    country: media.country ?? "",
    language: media.language ?? "",
    director: media.director ?? "",

    platform: Array.isArray(media.platform) ? media.platform : [],

    rating: typeof media.rating === "number" ? media.rating : undefined,

    description: media.description ?? "",
    image: media.image ?? "",
  };



  return (

    <Container size="sm">
      <Title mb="md">Edit Media</Title>
        <MediaForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
  
    </Container>

  );
}
