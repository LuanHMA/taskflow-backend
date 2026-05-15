import fastify from "fastify";
import cors from "@fastify/cors"
import jwt from "@fastify/jwt"

import { env } from "./infra/env";

export const app = fastify()

app.register(cors, {
    origin: env.FRONTEND_URL,
    credentials: true // para permitir cookies
})

app.register(jwt, {
    secret: env.JWT_SECRET,
})

app.get("/ping", async () => {
    return { status: "RODANDO" }
})
