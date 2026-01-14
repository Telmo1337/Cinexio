import {
  AppShell,
  Burger,
  Group,
  NavLink,
  Flex,
  Anchor,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import type { ReactNode } from "react";

import { ColorSchemeToggle } from "../scheme/ColorSchemeToggle";
import { userNavLinks } from "./constants/userNavLinks";
import { useAuth } from "../../context/useAuth";

interface NavbarProps {
  children?: ReactNode;
}

const UserNavbar = ({ children }: NavbarProps) => {
  const [opened, { toggle }] = useDisclosure();
  const location = useLocation();

  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/", { replace: true });
  }

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      {/* HEADER */}
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
          />

          <Group justify="space-between" style={{ flex: 1 }}>
            <Anchor
              size="xl"
              fw={800}
              href="/"
              style={{ textDecoration: 'none' }}


            >
              Cinexio
            </Anchor>

            <Flex gap="lg" align="center">
              <Flex visibleFrom="sm">
                {userNavLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    label={link.label}
                    component={Link}
                    to={link.to}
                    active={location.pathname === link.to}
                    fw={500}
                    styles={{
                      label: { whiteSpace: "nowrap" },
                    }}
                  />
                ))}
              </Flex>
              <Button variant="subtle" color="red" onClick={handleLogout}>
                Logout
              </Button>
              <ColorSchemeToggle />
            </Flex>
          </Group>
        </Group>
      </AppShell.Header>

      {/* SIDEBAR */}
      <AppShell.Navbar py="md" px={4}>
        {userNavLinks.map((link) => (
          <NavLink
            key={link.to}
            label={link.label}
            component={Link}
            to={link.to}
            active={location.pathname === link.to}
            mb="sm"
          />
        ))}
      </AppShell.Navbar>

      {/* MAIN */}
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default UserNavbar;
