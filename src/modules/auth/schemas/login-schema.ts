import z from "zod";
import { User } from "../entities/user.js";

export const loginSchema = z.object({
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

export type LoginInput = z.infer<typeof loginSchema>

export type LoginOutput = Omit<User, "password">