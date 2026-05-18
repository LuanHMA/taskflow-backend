import fastify from "fastify";
import cors from "@fastify/cors"
import jwt from "@fastify/jwt"

import { env } from "./infra/env/index.js";
import { prisma } from "./infra/database/connection.js";

export const app = fastify()

app.register(cors, {
    origin: env.FRONTEND_URL,
    credentials: true // para permitir cookies
})

app.register(jwt, {
    secret: env.JWT_SECRET,
})

app.get("/", async () => {
    try{
        const users = await prisma.user.findMany()
        return { users }
    }
    catch(error){
        console.log(error)
    }
})

app.get("/ping", async () => {
    return { status: "RODANDO" }
})
