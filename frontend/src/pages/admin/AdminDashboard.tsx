import { SimpleGrid, Stack, Title, Loader, Center } from "@mantine/core";

import StatCard from "../admin/Admin/StatCard";
import QuickActions from "../admin/Admin/QuickActions";
import { useAdminDashboard } from "../services/admin.service";

export default function AdminDashboard() {
  const { loading, stats } = useAdminDashboard();

  if (loading) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  return (
    <Stack>
      <Title>Admin Dashboard</Title>

      <SimpleGrid cols={4}>
        <StatCard label="Media" value={stats.mediaCount} to="/admin/media" />
        <StatCard label="Users" value={stats.userCount} to="/admin/users" />
        <StatCard label="Ratings" value="—" />
        <StatCard label="Comments" value="—" />
      </SimpleGrid>


      <QuickActions />
    </Stack>
  );
}