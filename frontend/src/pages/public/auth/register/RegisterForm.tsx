import {
  TextInput,
  PasswordInput,
  Button,
  Paper,
  Title,
  Stack,
  Text,
  Anchor,
  Center,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { Link } from "react-router-dom";

import { registerSchema } from "./schemas/register.schema";
import type { RegisterFormValues } from "./schemas/register.schema";

interface RegisterFormProps {
  onSubmit: (values: RegisterFormValues) => void;
  
}

const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  const form = useForm<RegisterFormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: zodResolver(registerSchema),
  });

  return (
    <Center
      component="form"
      h="100%"
      onSubmit={form.onSubmit(onSubmit)}
    >
      <Paper
        w={420}
        p="xl"
        radius="lg"
        withBorder
        shadow="xl"
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.25)",
        }}
      >
        <Stack>
          <Title order={2} c="white">
            Create your account
          </Title>

          <TextInput
            label="First name"
            {...form.getInputProps("firstName")}
          />

          <TextInput
            label="Last name"
            {...form.getInputProps("lastName")}
          />

          <TextInput
            label="Nickname"
            {...form.getInputProps("nickName")}
          />

          <TextInput
            label="Email"
            {...form.getInputProps("email")}
          />

          <PasswordInput
            label="Password"
            {...form.getInputProps("password")}
          />

          <PasswordInput
            label="Confirm password"
            {...form.getInputProps("confirmPassword")}
          />

          <Button
            type="submit"
            fullWidth
            mt="md"
            variant="transparent"
            color="white"
          >
            Register
          </Button>

          <Text size="sm" ta="center" c="gray.2">
            Already have an account?{" "}
            <Anchor component={Link} to="/login" c="white">
              Login here
            </Anchor>
          </Text>
        </Stack>
      </Paper>
    </Center>
  );
};

export default RegisterForm;
