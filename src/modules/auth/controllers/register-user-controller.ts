import { FastifyReply, FastifyRequest } from "fastify";
import { registerUserSchema } from "../schemas/register-user-schema.js";
import { RegisterUserService } from "../services/register-user-service.js";
import { TokenService } from "../services/token-service.js";
import { refreshTokenOptions } from "../../../shared/constants/refresh-token-options.js";

export class RegisterUserController {
    constructor(private registerUserService: RegisterUserService, private tokenService: TokenService) { }

    async handle(req: FastifyRequest, reply: FastifyReply) {
        const body = registerUserSchema.parse(req.body)
        const user = await this.registerUserService.execute(body)

        const { accessToken, refreshToken } = await this.tokenService.generateTokens({ userId: user.id, fastify: req.server })

        reply.setCookie('refreshToken', refreshToken, refreshTokenOptions)

        return reply.status(200).send({
            message: "Usuário cadastrado com sucesso",
            accessToken,
            user
        })
    }
}