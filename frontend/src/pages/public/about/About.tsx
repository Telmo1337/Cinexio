
import { Box, Title, SimpleGrid, Card, Group, Text, Divider } from "@mantine/core";

import { aboutCard } from "./constants/aboutCard";

import classes from "./AboutCard.module.css";

import type { AboutIcon } from "./constants/aboutCard";
import {
  IconEye,
  IconFolder,
  IconMessageCircle,
  IconStar,
  IconList,
  IconCompass,
  IconHeart,
  IconUser,
  IconSettings,
} from "@tabler/icons-react";


import ScrollReveal from "../../../animations/components/ScrollReveal";
import { fadeInUp } from "../../../animations/fadeInUp";
import { staggerContainer } from "../../../animations/staggerContainer";
import { motion } from "framer-motion";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const icons: Record<AboutIcon, React.FC<any>> = {
  eye: IconEye,
  folder: IconFolder,
  "message-circle": IconMessageCircle,
  star: IconStar,
  list: IconList,
  compass: IconCompass,
  heart: IconHeart,
  user: IconUser,
  settings: IconSettings,
};


const About = () => {
  return (

    <ScrollReveal variants={fadeInUp}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Box
          id="about"
          mih="80vh"
          display="flex"
          style={{ flexDirection: "column", justifyContent: "center" }}>

          <Title
            order={1}
            fz={{
              base: "1.5rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2.5rem",
              xl: "3rem",
            }}
            lh={1.05}
            fw={700}
            c="inherit"
            ta="start"

          >
            Cinexio. lets you...
          </Title>
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 3 }}
            spacing={{ base: "sm", sm: "sm" }}
            verticalSpacing={{ base: "sm", sm: "sm" }}
            ta="center"
            mt={30}
            w="100%"


          >
            {aboutCard.map((card) => {
              const Icon = icons[card.icon];
              return (
                <Card
                  key={card.id}
                  shadow="sm"
                  padding="lg"
                  radius="sm"
                  className={classes.card}
                >

                  <Group justify="center" align="center" mb={1} p="sm">
                    <Icon size={32} stroke={1.5} />
                    <Title order={2} fz="xl">
                      {card.title}
                    </Title>
                  </Group>
                  <Text fz="md" c="dimmed">
                    {card.description}
                  </Text>
                </Card>
              )
            })}
          </SimpleGrid>
          <Divider my={100} size="lg" />
        </Box>
      </motion.div>
    </ScrollReveal>
  )
}

export default About