import { FastifyInstance } from "fastify";
import { RefreshTokenRepository } from "../repositories/refresh-token-repository.js";
import { UnauthorizedError } from "../../../shared/errors/domain-errors.js";

export class TokenService {
    constructor(private refreshTokenRepository: RefreshTokenRepository) { }

    async generateTokens({ userId, fastify }: { userId: number, fastify: FastifyInstance }) {
        const accessToken = fastify.jwt.sign({ id: userId }, { expiresIn: "15min" })

        const refreshToken = await this.refreshTokenRepository.create({ userId })

        return {
            accessToken,
            refreshToken
        }
    }

    async refresh({ refreshToken, fastify }: { refreshToken: string, fastify: FastifyInstance }) {
        const userId = await this.refreshTokenRepository.findByRefreshToken({ refreshToken })

        if (!userId) {
            throw new UnauthorizedError("Token inválido ou expirado")
        }

        await this.refreshTokenRepository.revoke({ refreshToken })

        const tokens = await this.generateTokens({
            userId: Number(userId),
            fastify
        })

        return tokens
    }
}