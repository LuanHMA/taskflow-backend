import z from "zod";
import { User } from "../entities/user.js";

export const registerUserSchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string()
})

export type RegisterUserInput = z.infer<typeof registerUserSchema>

export type RegisterUserOutput = {
    user: Omit<User, "password">,
    access_token: string
    refresh_token: string
}