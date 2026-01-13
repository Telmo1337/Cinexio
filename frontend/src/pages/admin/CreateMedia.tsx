import { Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { createMedia } from "../services/media.service";
import MediaForm from "../admin/Media/MediaForm";
import type { MediaPayload } from "../services/media.service";

export default function CreateMedia() {
  const navigate = useNavigate();

  async function handleSubmit(values: MediaPayload) {
      console.log("FRONTEND SENT:", values);
    await createMedia(values);
    navigate("/admin/media");
  }

  return (
    <>
      <Title mb="md">Criar Media</Title>

      <MediaForm
        initialValues={{
          title: "",
          type: "MOVIE",
          category: [],          // agora é string[]
          releaseYear: new Date().getFullYear(),
        }}
        onSubmit={handleSubmit}
      />

    </>
  );
}
