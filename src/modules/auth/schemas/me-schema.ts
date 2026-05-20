import z from "zod";
import { User } from "../entities/user.js";

export const meSchema = z.object({
    userId: z.number("O userId deve ser um number"),
})

export type MeInput = z.infer<typeof meSchema>

export type MeOutput = Omit<User, "password">