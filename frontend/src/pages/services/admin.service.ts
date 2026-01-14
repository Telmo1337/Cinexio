// src/pages/admin/useAdminDashboard.ts
import { useEffect, useState } from "react";
import { getAllMedia } from "./media.service";
import { getAllUsers } from "./user.service";


export function useAdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    mediaCount: 0,
    userCount: 0,
  });

  useEffect(() => {
    async function load() {
      try {
        const [mediaRes, usersRes] = await Promise.all([
          getAllMedia(),
          getAllUsers(),
        ]);

        setStats({
          mediaCount: mediaRes.data.length,
          userCount: usersRes.totalUsers,
        });
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return {
    loading,
    stats,
  };
}
