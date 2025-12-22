import { Box, Text, Divider, Stack } from "@mantine/core";



const PublicFooter = () => {


    return (
        <Box component="footer" py="xl" mt="xl">
            <Divider mb="xl" size="lg" />
              <Text fw={700} c="inherit" ta="center">Cinexio</Text>
            <Stack align="center" mt="md">
                <Text size="sm" >
                    © {new Date().getFullYear()} Cinexio — Academic project <Text span c="inherit" fw={900} inherit>TelmoRegalado&TiagoSilva</Text>
                </Text>
            </Stack>
        </Box>
    );
};

export default PublicFooter;
