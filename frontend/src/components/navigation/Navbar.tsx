import { AppShell, Burger, Group, NavLink, Text, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import type { ReactNode } from 'react';


import { mainNavLinks } from '../navigation/constants/navLinks.ts';
import { ColorSchemeToggle } from '../scheme/ColorSchemeToggle.tsx';


interface NavbarProps {
  children?: ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  const [opened, { toggle }] = useDisclosure();

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
              gap="xs"
              direction="row"
              align="center"
            >
              <Flex visibleFrom="sm">
                {mainNavLinks.map((link) => (
                <NavLink
                  key={link.to}
                  label={link.label}
                  href={link.to}
                />
              ))}
              </Flex>
              <ColorSchemeToggle />
            </Flex>
            
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        {mainNavLinks.map((link) => (
          <NavLink key={link.to} label={link.label} href={link.to} mb="sm" />
        )
        )}
      </AppShell.Navbar>

      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  )
}

export default Navbar