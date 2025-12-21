import {
    Center,
    Title,
    SimpleGrid,
    Box,
    BackgroundImage,
} from "@mantine/core";

import heroDesktop from "../../../assets/heroDesktop.jpg";
import ShowMovies from "./ShowMovies";

const Hero = () => {
    return (
        <Box>
            <BackgroundImage
                src={heroDesktop}
                radius="xl"
                h={{ base: "90vh", md: "45vh" }}
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxShadow: "0 0 300px rgba(0,0,0,0.1) inset",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    backgroundBlendMode: "multiply",
                    
                }}
                mb={15}
            >
                <Center
                    h="100%"
                    pos="relative"
                    style={{ zIndex: 1 }}
                    px={{ base: "md", sm: "lg" }}
                >
                    <SimpleGrid
                        cols={1}
                        spacing="sm"
                        ta="center"
                       
                    >
                        <Title
                            order={1}
                            fz={{
                                base: "2.2rem",
                                sm: "3.2rem",
                                md: "4.5rem",
                                lg: "5rem",
                            }}
                            lh={1.05}
                            fw={700}
                            c="white"
                        >
                            Your personal movie & series tracker
                        </Title>

                        <Title
                            order={2}
                            fz={{
                                base: "1rem",
                                sm: "1.4rem",
                                md: "2rem",
                            }}
                            fw={400}
                            c="white"
                            opacity={0.85}
                            lh={1.4}
                        >
                            Organize your personal library, rate titles and share your thoughts
                            with others.
                        </Title>
                    </SimpleGrid>
                </Center>
            </BackgroundImage>
            

            <ShowMovies />
        </Box>
    );
};

export default Hero;
