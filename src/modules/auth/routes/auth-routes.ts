import { FastifyInstance } from "fastify"
import { makeRegisterController } from "../factories/make-register-controller.js"
import { makeLoginController } from "../factories/make-login-controller.js"
import { makeRefreshController } from "../factories/make-refresh-controller.js"
import { makeMeController } from "../factories/make-me-controller.js"
import { verifyToken } from "../../../shared/middlewares/verify-token.js"

export function authRoutes(app: FastifyInstance) {
    const registerController = makeRegisterController()
    const loginController = makeLoginController()
    const refreshTokenController = makeRefreshController()
    const getMeController = makeMeController()

    app.post("/register", registerController.handle.bind(registerController))
    app.post("/login", loginController.handle.bind(loginController))
    app.post("/refresh", refreshTokenController.handle.bind(refreshTokenController))
    app.get("/me", { preHandler: [verifyToken] }, getMeController.handle.bind(getMeController))
}