import { FastifyReply, FastifyRequest } from "fastify";
import { GetMeService } from "../services/me-service.js";

export class GetMeController {
    constructor(private getMeService: GetMeService) { }

    async handle(req: FastifyRequest, reply: FastifyReply) {
        const { userId } = req.user

        const user = await this.getMeService.execute(Number(userId))

        return reply.status(200).send({
            message: "Dados do usuário recuperados com sucesso",
            user
        })
    }
}