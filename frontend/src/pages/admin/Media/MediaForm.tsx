import {
  TextInput,
  Select,
  NumberInput,
  Textarea,
  Button,
  Stack,
  Grid,
  Card,
  Divider,
  Group,
  MultiSelect,
  Accordion,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import type { MediaPayload } from "../../services/media.service";
import { useEffect } from "react";

interface MediaFormProps {
  initialValues: MediaPayload;
  onSubmit: (values: MediaPayload) => void;
  submitLabel?: string;
}

const CATEGORY_OPTIONS = [
  "Action",
  "Drama",
  "Comedy",
  "Sci-Fi",
  "Thriller",
  "Romance",
  "Animation",
];

const PLATFORM_OPTIONS = [
  "Netflix",
  "HBO",
  "Prime Video",
  "Disney+",
  "Apple TV+",
];

export default function MediaForm({
  initialValues,
  onSubmit,
  submitLabel = "Guardar",
}: MediaFormProps) {
  const form = useForm<MediaPayload>({
    initialValues,
  });

  useEffect(() => {
    form.setValues(initialValues);
  }, [initialValues]);


  return (
    <Card withBorder radius="md" shadow="sm">
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack gap="lg">

          {/* ===== ESSENTIAL ===== */}
          <Grid>
            <Grid.Col span={12}>
              <TextInput
                label="Title"
                withAsterisk
                {...form.getInputProps("title")}
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <Select
                label="Type"
                withAsterisk
                data={[
                  { value: "MOVIE", label: "Movie" },
                  { value: "SERIES", label: "Series" },
                ]}
                {...form.getInputProps("type")}
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <NumberInput
                label="Release Year"
                withAsterisk
                min={1900}
                max={new Date().getFullYear()}
                {...form.getInputProps("releaseYear")}
              />
            </Grid.Col>
          </Grid>

          {/* ===== RATING ===== */}
          <Divider label="Rating" labelPosition="center" />

          <Grid>
            <Grid.Col span={12}>
              <MultiSelect
                label="Category"
                withAsterisk
                data={CATEGORY_OPTIONS}
                {...form.getInputProps("category")}
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <NumberInput
                label="Rating"
                min={0}
                max={10}
                step={1}
                allowDecimal={false}
                {...form.getInputProps("rating")}
              />

            </Grid.Col>
          </Grid>

          {/* ===== DETAILS (COLLAPSIBLE) ===== */}
          <Accordion>
            <Accordion.Item value="details">
              <Accordion.Control>Additional Details</Accordion.Control>
              <Accordion.Panel>

                <Grid>
                  <Grid.Col span={6}>
                    <TextInput
                      label="Country"
                      {...form.getInputProps("country")}
                    />
                  </Grid.Col>

                  <Grid.Col span={6}>
                    <TextInput
                      label="Language"
                      {...form.getInputProps("language")}
                    />
                  </Grid.Col>

                  <Grid.Col span={6}>
                    <TextInput
                      label="Director"
                      {...form.getInputProps("director")}
                    />
                  </Grid.Col>

                  <Grid.Col span={6}>
                    <MultiSelect
                      label="Platforms"
                      data={PLATFORM_OPTIONS}
                      {...form.getInputProps("platform")}
                    />
                  </Grid.Col>

                  <Grid.Col span={12}>
                    <TextInput
                      label="Image (URL)"
                      placeholder="https://..."
                      {...form.getInputProps("image")}
                    />
                  </Grid.Col>

                  <Grid.Col span={12}>
                    <Textarea
                      label="Description"
                      maxLength={500}
                      description="Máx. 500 caracteres"
                      {...form.getInputProps("description")}
                    />

                  </Grid.Col>
                </Grid>

              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>

          {/* ===== ACTIONS ===== */}
          <Group justify="flex-end">
            <Button type="submit">{submitLabel}</Button>
          </Group>

        </Stack>
      </form>
    </Card>
  );
}
