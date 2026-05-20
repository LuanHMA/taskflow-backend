import { FastifyReply, FastifyRequest } from "fastify";
import { LoginService } from "../services/login-service.js"
import { loginSchema } from "../schemas/login-schema.js";
import { TokenService } from "../services/token-service.js";
import { refreshTokenOptions } from "../../../shared/constants/refresh-token-options.js";

export class LoginController {
    constructor(private loginService: LoginService, private tokenService: TokenService) { }

    async handle(req: FastifyRequest, reply: FastifyReply) {
        const body = loginSchema.parse(req.body)

        const user = await this.loginService.execute(body)

        const { accessToken, refreshToken } = await this.tokenService.generateTokens({ userId: user.id, fastify: req.server })

        reply.setCookie('refreshToken', refreshToken, refreshTokenOptions)

        return reply.status(200).send({
            message: "Usuário logado com sucesso",
            accessToken,
            user
        })
    }

}