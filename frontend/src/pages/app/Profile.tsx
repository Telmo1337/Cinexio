import { useEffect, useState } from "react";
import { Container, Title, Stack } from "@mantine/core";


import {
  getMyProfile,
  updateProfile,
  updatePrivacy,
  updateAvatar,
} from "../services/user.service";





import type { ProfileUser } from "../../test/types/user";
import AvatarForm from "../admin/Profile/AvatarForm";
import ProfileForm from "../admin/Profile/ProfileForm";
import PrivacyForm from "../admin/Profile/PrivacyForm";


export default function Profile() {
  const [user, setUser] = useState<ProfileUser | null>(null);

  useEffect(() => {
    getMyProfile().then(setUser);
  }, []);

  if (!user) return null;

  async function refreshProfile() {
    const data = await getMyProfile(); // GET /users/me
    setUser(data);
  }



  return (
    <Container size="sm">
      <Title mb="md">Profile</Title>

      <Stack gap="lg">
        <AvatarForm
          avatar={user.avatar ?? undefined}
          onSubmit={async (avatar) => {
            await updateAvatar(avatar);
            await refreshProfile();
          }}
        />

        <ProfileForm
          key={user.updatedAt ?? user.id}
          initialValues={{
            bio: user.bio ?? "",
            language: user.language ?? "EN",
          }}
          onSubmit={async (values) => {
            await updateProfile(values);
            await refreshProfile();
           alert("Perfil atualizado com sucesso");


          }}
        />


        <PrivacyForm
          value={user.privacy}
          onChange={async (privacy) => {
            await updatePrivacy(privacy);
            await refreshProfile();
          }}
        />
      </Stack>
    </Container>
  );
}


