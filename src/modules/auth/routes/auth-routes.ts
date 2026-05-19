import { FastifyInstance } from "fastify"
import { makeRegisterController } from "../factories/make-register-controller.js"
import { makeLoginController } from "../factories/make-login-controller.js"

export function authRoutes(app: FastifyInstance) {
    const registerController = makeRegisterController()
    const loginController = makeLoginController()

    app.post("/register", registerController.handle.bind(registerController))
    app.post("/login", loginController.handle.bind(loginController))
}