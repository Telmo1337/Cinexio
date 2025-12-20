import {
  AppShell,
  Burger,
  Group,
  NavLink,
  Text,
  Flex,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link, useLocation } from "react-router-dom";
import type { ReactNode } from "react";

import { ColorSchemeToggle } from "../scheme/ColorSchemeToggle";
import { userNavLinks } from "./constants/userNavLinks";

interface NavbarProps {
  children?: ReactNode;
}

const UserNavbar = ({ children }: NavbarProps) => {
  const [opened, { toggle }] = useDisclosure();
  const location = useLocation();

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
            <Text size="xl" fw={700}>
              Cinexio
            </Text>

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
