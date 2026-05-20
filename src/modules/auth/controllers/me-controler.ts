import { FastifyReply, FastifyRequest } from "fastify";
import { GetMeService } from "../services/me-service.js";

export class GetMeController {
    constructor(private getMeService: GetMeService) { }

    async handle(req: FastifyRequest, reply: FastifyReply) {
        const { userId } = req.user
    }
}