import {
  Center,
  Title,
  SimpleGrid,
  Box,
  BackgroundImage,
} from "@mantine/core";

import heroSection from "../../../assets/heroSection.jpg";
import ShowMovies from "./ShowMovies";

import { motion } from "framer-motion";
import { fadeIn } from "../../../animations/fadeIn";
import { staggerContainer } from "../../../animations/staggerContainer";

const Hero = () => {
  return (
    <Box id="top">
      <BackgroundImage
        src={heroSection}
        radius="xl"
        h={{ base: "70svh", sm: "45vh" }} 
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "0 0 300px rgba(0,0,0,0.1) inset",
          backgroundColor: "rgba(0,0,0,0.5)",
          backgroundBlendMode: "multiply",
        }}
        mb={15}
      >
        <Center h="100%" pos="relative" px={{ base: "md", sm: "lg" }}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <SimpleGrid cols={1} spacing="sm" ta="center">
              <motion.div variants={fadeIn}>
                <Title
                  order={1}
                  fz={{
                    base: "2rem",
                    sm: "2rem",
                    md: "3rem",
                    lg: "4rem",
                    xl: "5rem",
                  }}
                  lh={1.05}
                  fw={700}
                  c="white"
                >
                  Your personal movie & series tracker
                </Title>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Title
                  order={2}
                  fz={{
                    base: "1rem",
                    sm: "1.2rem",
                    md: "1.5rem",
                    lg: "1.5rem",
                    xl: "2rem",
                  }}
                  fw={400}
                  c="white"
                  opacity={0.85}
                  lh={1.4}
                >
                  Organize your personal library, rate titles and share your
                  thoughts with others.
                </Title>
              </motion.div>
            </SimpleGrid>
          </motion.div>
        </Center>
      </BackgroundImage>

     
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }} // mais baixo
      >
        <ShowMovies />
      </motion.div>
    </Box>
  );
};

export default Hero;
