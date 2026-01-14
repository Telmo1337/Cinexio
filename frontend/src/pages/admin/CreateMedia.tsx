import { Container, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { createMedia } from "../services/media.service";
import MediaForm from "../admin/Media/MediaForm";
import type { MediaPayload } from "../services/media.service";
import { cleanMediaPayload } from "./Media/utils/mediaPayload";

export default function CreateMedia() {
  const navigate = useNavigate();

async function handleSubmit(values: MediaPayload) {
  const payload = cleanMediaPayload(values);

  console.log("FRONTEND SENT:", payload);

  await createMedia(payload);
  navigate("/admin/media");
}


  return (
    <>
      <Container size="sm">
        <Title mb="md">Create Media</Title>

        <MediaForm
          initialValues={{
            title: "",
            type: "MOVIE",
            category: [],
            releaseYear: new Date().getFullYear(),
          }}
          onSubmit={handleSubmit}
        />
      </Container>

    </>
  );
}
