import { FastifyReply, FastifyRequest } from "fastify";
import { LoginService } from "../services/login-service.js"
import { loginSchema } from "../schemas/login-schema.js";

export class LoginController {
    constructor(private loginService: LoginService) { }

    async handle(req: FastifyRequest, reply: FastifyReply) {
        const body = loginSchema.parse(req.body)

        const user = await this.loginService.execute(body)

        const token = await reply.jwtSign({
        })

        return reply.status(200).send(user)
    }

}