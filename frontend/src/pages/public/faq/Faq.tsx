import { Box, Title, Accordion, BackgroundImage } from "@mantine/core";
import { faqData } from "./constants/faqData";
import faqDesktop from "../../../assets/faqDesktop.jpg";


import ScrollReveal from "../../../animations/components/ScrollReveal";
import { fadeInUp } from "../../../animations/fadeInUp";
import { staggerContainer } from "../../../animations/staggerContainer";
import { motion } from "framer-motion";

const Faq = () => {
    return (
        <ScrollReveal variants={fadeInUp}>
            <BackgroundImage
                src={faqDesktop}
                radius="xl"
                h="100vh"
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxShadow: "0 0 300px rgba(0,0,0,0.1) inset",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    backgroundBlendMode: "multiply",
                }}

            >
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Box
                        mih="100vh"
                        display="flex"
                        style={{ alignItems: "center" }}

                    >

                        <Box
                            w="100%"
                            style={{ maxWidth: 800, marginInline: "auto" }}
                            px="md"
                        >
                            <Title
                                order={1}
                                fz={{ base: "1.5rem", md: "2rem", lg: "2.5rem" }}
                                fw={700}
                                mb="lg"
                                ta="center"
                                c="white"
                            >
                                Frequently Asked Questions
                            </Title>

                            <Accordion
                                variant="separated"
                                radius="lg"
                                chevronIconSize={20}
                                c="inherit"
                            >
                                {faqData.map((item) => (
                                    <Accordion.Item key={item.value} value={item.value}>
                                        <Accordion.Control>
                                            {item.question}
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            {item.answer}
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Box>

                    </Box>
                </motion.div>
            </BackgroundImage>
        </ScrollReveal>
    );
};

export default Faq;
