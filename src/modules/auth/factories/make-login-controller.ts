import { LoginController } from "../controllers/login-controller.js"
import { SessionRepository } from "../repositories/session-repository.js"
import { LoginService } from "../services/login-service.js"

export function makeLoginController() {
  const sessionRepository = new SessionRepository()
  const loginService = new LoginService(sessionRepository)
  const loginController = new LoginController(loginService)

  return loginController
}