import { Textarea, Select, Button, Card, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";

type ProfileFormValues = {
  bio: string;
  language: string;
};

export default function ProfileForm({
  initialValues,
  onSubmit,
}: {
  initialValues: ProfileFormValues;
  onSubmit: (v: ProfileFormValues) => void;
}) {
  const form = useForm<ProfileFormValues>({ initialValues });

  return (
    <Card withBorder>
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack>
          <Textarea
            label="Bio"
            autosize
            minRows={3}
            {...form.getInputProps("bio")}
          />

          <Select
            label="Language"
            data={[
              { value: "EN", label: "English" },
              { value: "PT", label: "Português" },
            ]}
            {...form.getInputProps("language")}
          />

          <Button type="submit">Save profile</Button>
        </Stack>
      </form>
    </Card>
  );
}
