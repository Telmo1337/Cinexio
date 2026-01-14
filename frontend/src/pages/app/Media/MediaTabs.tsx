import { Tabs } from "@mantine/core";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function MediaTabs({ value, onChange }: Props) {
  return (
    <Tabs
      value={value}
      onChange={(v) => {
        if (v) onChange(v);
      }}
    >
      <Tabs.List>
        <Tabs.Tab value="all">All</Tabs.Tab>
        <Tabs.Tab value="movies">Movies</Tabs.Tab>
        <Tabs.Tab value="series">Series</Tabs.Tab>
        <Tabs.Tab value="top">Top 10</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
