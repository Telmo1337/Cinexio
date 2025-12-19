import { useMantineColorScheme, ActionIcon } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';


export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon onClick={() => toggleColorScheme()} variant="subtle" >
      {colorScheme === 'dark' ? <IconSun size={24} /> : <IconMoon size={24}/>}
    </ActionIcon>
  );
}
