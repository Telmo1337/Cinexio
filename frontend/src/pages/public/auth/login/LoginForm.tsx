import {
    TextInput,
    PasswordInput,
    Button,
    Paper,
    Title,
    Stack,
    BackgroundImage,
    Center,
    Text,
    Anchor

} from "@mantine/core";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { Link } from "react-router-dom";
import { loginSchema } from "./schemas/login.schema";
import type { LoginFormValues } from "./schemas/login.schema";

import loginImg from "../../../../assets/loginImg.jpg";

interface LoginFormProps {
    onSubmit: (values: LoginFormValues) => void;
    loading?: boolean;
}

const LoginForm = ({ onSubmit, loading }: LoginFormProps) => {
    const form = useForm<LoginFormValues>({
        initialValues: {
            identifier: "",
            password: "",
        },
        validate: zodResolver(loginSchema),
    });

    function handleClick() {
        const validation = form.validate();
        if (validation.hasErrors) return;
        onSubmit(form.values);
    }

    return (
        <BackgroundImage
            src={loginImg}
            h="100vh"
            radius="xl"
            style={{
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                boxShadow: "0 0 300px rgba(0,0,0,0.1) inset",
                backgroundColor: "rgba(0,0,0,0.5)",
                backgroundBlendMode: "multiply",
            }}
        >
            {/* Conteúdo */}
            <Center h="100%" pos="relative" style={{ backdropFilter: "blur(4px)" }}>
                <Paper
                    w={400}
                    p="xl"
                    radius="lg"
                    withBorder
                    shadow="xl"
                    style={{
                        background: "rgba(255,255,255,0.15)",
                        border: "1px solid rgba(255,255,255,0.25)",
                    }}
                >
                    <Stack >
                        <Title order={2} c="white">
                            Sign in to your account
                        </Title>

                        <TextInput
                            label="Email ou Nickname"
                            placeholder="ex: user@example.com"
                            {...form.getInputProps("identifier")}
                            c="white"
                        />

                        <PasswordInput
                            c="white"
                            label="Password"
                            placeholder="********"
                            {...form.getInputProps("password")}
                        />

                        <Button
                            fullWidth
                            mt="md"
                            loading={loading}
                            onClick={handleClick}
                            variant="transparent"
                            color="white"
                            
                        >
                            Entrar
                        </Button>

                        <Text size="sm" ta="center" c="gray.2">
                            You don’t have an account?{" "}
                            <Anchor
                                component={Link}
                                to="/signup"
                                c="white"
                                fw={500}
                                underline="hover"
                            >
                                Register here
                            </Anchor>
                        </Text>
                    </Stack>
                </Paper>
            </Center>
        </BackgroundImage>
    );
};

export default LoginForm;
