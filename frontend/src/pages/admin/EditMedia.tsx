import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Title } from "@mantine/core";
import {
  getMediaById,
  updateMedia,
} from "../services/media.service";
import MediaForm from "../admin/Media/MediaForm";
import type {  MediaPayload } from "../services/media.service";
import type { Media } from "../../test/types/media";

export default function EditMedia() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [media, setMedia] = useState<Media | null>(null);

  useEffect(() => {
    if (id) getMediaById(id).then(setMedia);
  }, [id]);

  async function handleSubmit(values: MediaPayload) {
    if (!id) return;
    await updateMedia(id, values);
    navigate("/admin/media");
  }

  if (!media) return null;

  return (
    <>
      <Title mb="md">Editar Media</Title>
      <MediaForm initialValues={media} onSubmit={handleSubmit} />
    </>
  );
}
