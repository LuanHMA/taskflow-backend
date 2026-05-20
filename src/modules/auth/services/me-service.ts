import { SessionMapper } from "../mappers/session-mapper.js";
import { SessionRepository } from "../repositories/session-repository.js";
import { MeInput, MeOutput } from "../schemas/me-schema.js";

export class GetMeService {
    constructor(private sessionRepository: SessionRepository) { }

    async execute({ userId }: MeInput): Promise<MeOutput> {
        const user = await this.sessionRepository.findById({ id: userId })

        if (!user) {
            throw new Error("Usuário não encontrado")
        }

        return SessionMapper.toResponse(user)
    }
}