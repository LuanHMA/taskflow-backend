import { GetMeController } from "../controllers/me-controler.js"
import { SessionRepository } from "../repositories/session-repository.js"
import { GetMeService } from "../services/me-service.js"

export function makeMeController(){
    const sessionRepository = new SessionRepository()
    const getMeService = new GetMeService(sessionRepository)
    const getMeController = new GetMeController(getMeService)

    return getMeController
}   