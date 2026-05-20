import { FastifyReply, FastifyRequest } from "fastify";
import { TokenService } from "../services/token-service.js";
import { refreshTokenCookiesSchema } from "../schemas/refresh-token.schema.js";

export class RefreshTokenController {
    constructor(private tokenService: TokenService) { }

    async handle(req: FastifyRequest, reply: FastifyReply) {
        const { refreshToken } = refreshTokenCookiesSchema.parse(req.cookies)

        const { accessToken, refreshToken: newRefreshToken } = await this.tokenService.refresh({
            refreshToken,
            fastify: req.server
        })

        reply.setCookie('refreshToken', newRefreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            path: '/auth/refresh',
            maxAge: 60 * 60 * 24 * 7
        })

        return reply.status(200).send({
            message: "Usuário logado com sucesso",
            accessToken,
        })

    }
}