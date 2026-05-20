import { LoginController } from "../controllers/login-controller.js"
import { RefreshTokenRepository } from "../repositories/refresh-token-repository.js"
import { SessionRepository } from "../repositories/session-repository.js"
import { LoginService } from "../services/login-service.js"
import { TokenService } from "../services/token-service.js"

export function makeLoginController() {
  const sessionRepository = new SessionRepository()
  const refreshTokenRepository = new RefreshTokenRepository()
  const tokenService = new TokenService(refreshTokenRepository)

  const loginService = new LoginService(sessionRepository)
  const loginController = new LoginController(loginService, tokenService)

  return loginController
}