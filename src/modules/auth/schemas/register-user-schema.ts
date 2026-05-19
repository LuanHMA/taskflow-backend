import z from "zod";
import { User } from "../entities/user.js";

export const registerUserSchema = z.object({
    name: z
        .string("O nome deve ser uma String")
        .min(3, "O nome deve ter pelo menos 3 caracteres")
        .max(100, "O nome deve ter no máximo 100 caracteres"),
    email: z
        .string("O email deve ser uma String")
        .trim()
        .toLowerCase()
        .regex(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            "E-mail inválido"
        ),

    password: z
        .string("A senha deve ser uma String")
        .min(6, "A senha deve ter pelo menos 6 caracteres")
})

export type RegisterUserInput = z.infer<typeof registerUserSchema>

export type RegisterUserOutput = Omit<User, "password">