import { FastifyReply, FastifyRequest } from "fastify";
import { UnauthorizedError } from "../errors/domain-errors.js";

export async function verifyToken(req: FastifyRequest, reply: FastifyReply) {
    try {
        await req.jwtVerify()
    }
    catch(error){
        throw new UnauthorizedError("Token inválido ou inexistente")
    }
}