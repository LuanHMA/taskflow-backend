import { RefreshTokenController } from "../controllers/refresh-controller.js";
import { RefreshTokenRepository } from "../repositories/refresh-token-repository.js";
import { TokenService } from "../services/token-service.js";

export function makeRefreshController() {
    const refreshTokenRepository = new RefreshTokenRepository()
    const tokenService = new TokenService(refreshTokenRepository)
    const refreshTokenController = new RefreshTokenController(tokenService)

    return refreshTokenController
}