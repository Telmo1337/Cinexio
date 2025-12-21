import { AppShell, Burger, Group, NavLink, Anchor, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import type { ReactNode } from 'react';

import { Link, useLocation } from "react-router-dom";

import { ColorSchemeToggle } from '../scheme/ColorSchemeToggle.tsx';
import { publicNavLinks } from './constants/publicNavLinks.ts';

import { useMantineColorScheme } from "@mantine/core";
import { useHeadroom } from '@mantine/hooks';

interface NavbarProps {
  children?: ReactNode;
}

const PublicNavbar = ({ children }: NavbarProps) => {
  const [opened, { toggle }] = useDisclosure();
  const location = useLocation();
  const { colorScheme } = useMantineColorScheme();
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <AppShell
      header={{ height: 60, collapsed: !pinned, }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened, } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <Anchor
              size="xl"
              fw={800}
              href="/"
              style={{ textDecoration: 'none' }}
              c={colorScheme === "dark" ? "white" : "black"}

            >
              Cinexio
            </Anchor>

            <Flex
              gap="lg"
              direction="row"
              align="center"
            >
              <Flex visibleFrom="sm"  >
                {publicNavLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    label={link.label}
                    component={Link}
                    to={link.to}
                    active={location.pathname.startsWith("/app/" + link.to)}
                    fw={600}
                    styles={{
                      label: {
                        whiteSpace: 'nowrap',
                      }
                    }}
                    c={colorScheme === "dark" ? "white" : "black"}

                  />
                ))}
              </Flex>
              <ColorSchemeToggle />
            </Flex>

          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        {publicNavLinks.map((link) => (
          <NavLink
            key={link.to}
            label={link.label}
            component={Link}
            to={link.to}
            active={location.pathname === link.to}
            mb="sm" />
        )
        )}
      </AppShell.Navbar>

      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  )
}

export default PublicNavbar