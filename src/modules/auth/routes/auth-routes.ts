import { FastifyInstance } from "fastify"
import { makeRegisterController } from "../factories/make-register-controller.js"
import { makeLoginController } from "../factories/make-login-controller.js"
import { makeRefreshController } from "../factories/make-refresh-controller.js"

export function authRoutes(app: FastifyInstance) {
    const registerController = makeRegisterController()
    const loginController = makeLoginController()
    const refreshTokenController = makeRefreshController()

    app.post("/register", registerController.handle.bind(registerController))
    app.post("/login", loginController.handle.bind(loginController))
    app.post("/refresh", refreshTokenController.handle.bind(refreshTokenController))
}