import { FastifyInstance } from "fastify";
import { authRoutes } from "./modules/auth/routes/auth-routes.js";

export function routes(app: FastifyInstance) {
    app.register(authRoutes, {
        prefix: "/auth"
    })
}