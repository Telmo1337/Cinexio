import { useState } from "react";
import { TextInput, Button, Stack, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export default function UserSearch() {
  const [nick, setNick] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    if (!nick.trim()) return;
    navigate(`${nick}`);
  }

  return (
    <Stack maw={400}>
      <Title order={3}>Search User</Title>

      <TextInput
        placeholder="User's Nickname"
        value={nick}
        onChange={(e) => setNick(e.currentTarget.value)}
      />

      <Button onClick={handleSearch}>
        See Public Library
      </Button>
    </Stack>
  );
}
