import { useEffect, useState } from "react";
import { Table, Button, Group, Title } from "@mantine/core";
import { Link } from "react-router-dom";

import { getAllMedia, deleteMedia } from "../services/media.service";
import type { Media } from "../../test/types/media";

import { useMediaFilters } from "../admin/Media/useMediaFilters";
import MediaFilters from "../admin/Media/MediaFilters";

export default function MediaList() {
  const [media, setMedia] = useState<Media[]>([]);

  useEffect(() => {
    getAllMedia().then((res) => setMedia(res.data));
  }, []);

  const {
    filteredMedia,
    search,
    typeFilter,
    categoryFilter,
    yearFilter,
    setSearch,
    setTypeFilter,
    setCategoryFilter,
    setYearFilter,
    resetFilters,
  } = useMediaFilters(media);

  async function handleDelete(id: string) {
    await deleteMedia(id);
    setMedia((prev) => prev.filter((m) => m.id !== id));
  }

  return (
    <>
      <Title mb="md">Gerir Media</Title>

      <MediaFilters
        search={search}
        typeFilter={typeFilter}
        categoryFilter={categoryFilter}
        yearFilter={yearFilter}
        setSearch={setSearch}
        setTypeFilter={setTypeFilter}
        setCategoryFilter={setCategoryFilter}
        setYearFilter={setYearFilter}
        onReset={resetFilters}
      />

      <Table striped highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Título</Table.Th>
            <Table.Th>Tipo</Table.Th>
            <Table.Th>Ações</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {filteredMedia.map((m) => (
            <Table.Tr key={m.id}>
              <Table.Td>{m.title}</Table.Td>
              <Table.Td>{m.type}</Table.Td>
              <Table.Td>
                <Group>
                  <Button
                    size="xs"
                    component={Link}
                    to={`/admin/media/${m.id}`}
                  >
                    Editar
                  </Button>
                  <Button
                    size="xs"
                    color="red"
                    onClick={() => handleDelete(m.id)}
                  >
                    Apagar
                  </Button>
                </Group>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </>
  );
}
