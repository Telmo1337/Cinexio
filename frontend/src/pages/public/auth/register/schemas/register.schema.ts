import { z } from "zod";

export const registerSchema = z
  .object({
    firstName: z.string().min(2, "Short name"),
    lastName: z.string().min(2, "Short last name"),
    nickName: z
      .string()
      .trim()
      .min(2, "Short nickname")
      .regex(/^\S+$/, "Nickname cannot contain spaces"),
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "Mínimo 6 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords não coincidem",
    path: ["confirmPassword"],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
