import { Select, Card } from "@mantine/core";

export default function PrivacyForm({
  value,
  onChange,
}: {
  value: "PUBLIC" | "FRIENDS" | "PRIVATE";
  onChange: (v: "PUBLIC" | "FRIENDS" | "PRIVATE") => void;
}) {
  return (
    <Card withBorder>
      <Select
        label="Profile privacy"
        value={value}
        onChange={(v) => {
          if (v) onChange(v as "PUBLIC" | "FRIENDS" | "PRIVATE");
        }}
        data={[
          { value: "PUBLIC", label: "Public" },
          { value: "FRIENDS", label: "Friends" },
          { value: "PRIVATE", label: "Private" },
        ]}
      />
    </Card>
  );
}
