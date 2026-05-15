import fastify from "fastify";
import cors from "@fastify/cors"
import jwt from "@fastify/jwt"

import { env } from "./infra/env";

export const app = fastify()

app.register(cors, {
    origin: "*",
    credentials: true
})

app.register(jwt, {
    secret: env.JWT_SECRET,
})

