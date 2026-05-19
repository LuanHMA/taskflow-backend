import { RegisterUserController } from "../controllers/register-user-controller.js"
import { SessionRepository } from "../repositories/session-repository.js"
import { RegisterUserService } from "../services/register-user-service.js"

export function makeRegisterController() {
  const sessionRepository = new SessionRepository()
  const registerUserService = new RegisterUserService(sessionRepository)
  const registerUserController = new RegisterUserController(registerUserService)

  return registerUserController
}