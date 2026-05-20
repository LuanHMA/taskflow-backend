import { FastifyReply, FastifyRequest } from "fastify";
import { registerUserSchema } from "../schemas/register-user-schema.js";
import { RegisterUserService } from "../services/register-user-service.js";

export class RegisterUserController {
    constructor(private registerUserService: RegisterUserService) { }

    async handle(req: FastifyRequest, reply: FastifyReply) {
        const body = registerUserSchema.parse(req.body)
        const user = await this.registerUserService.execute(body)

        const token = await reply.jwtSign({
            userId: user.id
        }, {
            sign: { expiresIn: "15min" }
        })

        return reply.status(201).send({
            message: "Usuário cadastrado com sucesso",
            token,
        })
    }
}