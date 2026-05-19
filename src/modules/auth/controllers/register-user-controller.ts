import { FastifyReply, FastifyRequest } from "fastify";
import { RegisterUserInput, registerUserSchema } from "../schemas/register-user-schema.js";
import { RegisterUserService } from "../services/register-user-service.js";

export class RegisterUserController {
    constructor(private registerUserService: RegisterUserService) { }

    async handle(req: FastifyRequest, reply: FastifyReply) {
        const body = registerUserSchema.parse(req.body)
        const result = await this.registerUserService.execute(body)

        return reply.status(201).send({
            message: "Usuário cadastrado com sucesso",
            ...result
        })

    }
}