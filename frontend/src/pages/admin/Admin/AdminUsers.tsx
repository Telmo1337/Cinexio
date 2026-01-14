import { useEffect, useState } from "react";
import { Table, Title, Loader, Center } from "@mantine/core";
import { getAllUsers } from "../../services/user.service";
import type { AdminUser } from "../../../test/types/user";

export default function AdminUsers() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllUsers().then((res) => {
      setUsers(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  return (
    <>
      <Title mb="md">Users</Title>

      <Table striped highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Nick</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Created</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {users.map((u) => (
            <Table.Tr key={u.id}>
              <Table.Td>{u.nickName}</Table.Td>
              <Table.Td>{u.email}</Table.Td>
              <Table.Td>
                {new Date(u.createdAt).toLocaleDateString()}
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </>
  );
}
