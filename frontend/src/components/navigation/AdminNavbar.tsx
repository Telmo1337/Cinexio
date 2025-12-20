import { AppShell, Burger, Group, NavLink, Text, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import type { ReactNode } from 'react';

import { Link, useLocation } from "react-router-dom";

import { ColorSchemeToggle } from '../scheme/ColorSchemeToggle.tsx';
import { adminNavLinks } from './constants/adminNavLinks.ts';


interface NavbarProps {
  children?: ReactNode;
}

const AdminNavbar = ({ children }: NavbarProps) => {
  const [opened, { toggle }] = useDisclosure();
  const location = useLocation();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <Text
              size="xl"
              fw={700}

              style={{ textDecoration: 'none' }}
            >
              Cinexio
            </Text>

            <Flex
              gap="lg"
              direction="row"
              align="center"
            >
              <Flex visibleFrom="sm"  >
                {adminNavLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    label={link.label}
                    component={Link}
                    to={link.to}
                    active={location.pathname.startsWith("/admin/" + link.to)}
                    styles={{
                      label: {
                        whiteSpace: 'nowrap',
                      }
                    }}
                  />
                ))}
              </Flex>
              <ColorSchemeToggle />
            </Flex>

          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        {adminNavLinks.map((link) => (
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

export default AdminNavbar