import { useEffect, useState } from "react";
import {
  Table,
  Button,
  Group,
  Title,
  Modal,
  Text,
} from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";

import { getAllMedia, deleteMedia } from "../services/media.service";
import type { Media } from "../../test/types/media";

import { useMediaFilters } from "../admin/Media/useMediaFilters";
import MediaFilters from "../admin/Media/MediaFilters";

export default function MediaList() {
  const [media, setMedia] = useState<Media[]>([]);
  const [opened, setOpened] = useState(false);
  const [mediaToDelete, setMediaToDelete] = useState<Media | null>(null);

  const navigate = useNavigate();

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

  function openDeleteModal(m: Media) {
    setMediaToDelete(m);
    setOpened(true);
  }

  async function confirmDelete() {
    if (!mediaToDelete) return;

    await deleteMedia(mediaToDelete.id);

    setMedia((prev) =>
      prev.filter((m) => m.id !== mediaToDelete.id)
    );

    setOpened(false);
    setMediaToDelete(null);
  }

  return (
    <>
      <Title mb="md">Manage Media</Title>

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
            <Table.Th>Title</Table.Th>
            <Table.Th>Type</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {filteredMedia.map((m) => (
            <Table.Tr
              key={m.id}
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/admin/media/${m.id}`)}
            >
              <Table.Td>{m.title}</Table.Td>
              <Table.Td>{m.type}</Table.Td>
              <Table.Td onClick={(e) => e.stopPropagation()}>
                <Group>
                  <Button
                    size="xs"
                    component={Link}
                    to={`/admin/media/${m.id}/edit`}
                  >
                    Edit Media
                  </Button>

                  <Button
                    size="xs"
                    color="red"
                    onClick={() => openDeleteModal(m)}
                  >
                    Delete Media
                  </Button>
                </Group>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      {/* ===== CONFIRM DELETE MODAL ===== */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Confirm deletion"
        centered
      >
        <Text mb="md">
          Tens a certeza que queres apagar{" "}
          <strong>{mediaToDelete?.title}</strong>?
        </Text>

        <Group justify="flex-end">
          <Button variant="default" onClick={() => setOpened(false)}>
            Cancelar
          </Button>

          <Button color="red" onClick={confirmDelete}>
            Apagar
          </Button>
        </Group>
      </Modal>
    </>
  );
}
