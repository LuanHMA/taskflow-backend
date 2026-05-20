import { RegisterUserController } from "../controllers/register-user-controller.js"
import { RefreshTokenRepository } from "../repositories/refresh-token-repository.js"
import { SessionRepository } from "../repositories/session-repository.js"
import { RegisterUserService } from "../services/register-user-service.js"
import { TokenService } from "../services/token-service.js"

export function makeRegisterController() {
  const sessionRepository = new SessionRepository()
  const registerUserService = new RegisterUserService(sessionRepository)
  const refreshTokenRepository = new RefreshTokenRepository()
  const tokenService = new TokenService(refreshTokenRepository)
  const registerUserController = new RegisterUserController(registerUserService, tokenService)

  return registerUserController
}