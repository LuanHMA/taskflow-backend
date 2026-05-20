import fastify from "fastify";
import cors from "@fastify/cors"
import jwt from "@fastify/jwt"
import cookies from "@fastify/cookie"
import { env } from "./infra/env/index.js";
import { globaErrorHandler } from "./shared/errors/error-handler.js";
import { routes } from "./routes.js";

export const app = fastify()

globaErrorHandler(app)

app.register(cookies)

app.register(cors, {
    origin: env.FRONTEND_URL,
    credentials: true
})

app.register(jwt, {
    secret: env.JWT_SECRET,
})

app.register(routes, {
    prefix: "/api"
})