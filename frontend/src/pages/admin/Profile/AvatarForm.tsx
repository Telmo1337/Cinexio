import { TextInput, Button, Card, Stack, Avatar } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function AvatarForm({
  avatar,
  onSubmit,
}: {
  avatar?: string;
  onSubmit: (url: string) => void;
}) {
  const form = useForm({
    initialValues: {
      avatar: avatar ?? "",
    },
  });

  return (
    <Card withBorder>
      <form onSubmit={form.onSubmit((v) => onSubmit(v.avatar))}>
        <Stack>
          <Avatar src={avatar} size={80} radius="xl" />

          <TextInput
            label="Avatar URL"
            placeholder="https://..."
            {...form.getInputProps("avatar")}
          />

          <Button type="submit">Update avatar</Button>
        </Stack>
      </form>
    </Card>
  );
}
