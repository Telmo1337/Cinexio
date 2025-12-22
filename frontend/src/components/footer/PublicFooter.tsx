import { Box, Group, Text, Divider, Stack, Button } from "@mantine/core";

const footerLinks = [
    { label: "About", target: "about" },
    { label: "Back to Top", target: "top" },
];

const PublicFooter = () => {
    const handleScroll = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;

        el.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <Box component="footer" py="xl" mt="xl">
            <Divider mb="xl" size="lg" />

            <Group justify="space-between" align="center" px="md" >
                <Text fw={700} c="inherit">Cinexio</Text>

                <Group gap="lg">
                    {footerLinks.map((link) => (
                        <Button
                            key={link.label}
                            variant="transparent"
                            color="theme.primaryColor"
                            onClick={() => handleScroll(link.target)}
                        >
                            {link.label}
                        </Button>
                    ))}
                </Group>
            </Group>

            <Stack align="center" mt="md">
                <Text size="sm" >
                    © {new Date().getFullYear()} Cinexio — Academic project <Text span c="inherit" fw={900} inherit>TelmoRegalado&TiagoSilva</Text>
                </Text>
            </Stack>
        </Box>
    );
};

export default PublicFooter;
