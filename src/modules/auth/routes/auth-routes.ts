import { FastifyInstance } from "fastify"
import { makeRegisterController } from "../factories/make-register-controller.js"

export function authRoutes(app: FastifyInstance) {
    const registerController = makeRegisterController()

    app.post("/register", registerController.handle.bind(registerController))
}