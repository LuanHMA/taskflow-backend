import bcrypt from "bcryptjs";
import { BadRequestError, NotFoundError, UnauthorizedError } from "../../../shared/errors/domain-errors.js";
import { SessionRepository } from "../repositories/session-repository.js";
import { LoginInput } from "../schemas/login-schema.js";
import { SessionMapper } from "../mappers/session-mapper.js";

export class LoginService {
    constructor(private readonly sessionRepository: SessionRepository) { }

    async execute(data: LoginInput) {
        const user = await this.sessionRepository.findByEmail({ email: data.email })

        if (!user) {
            throw new NotFoundError("Usuário não encontrado")
        }

        const isValidPassword = await bcrypt.compare(data.password, user.password)

        if(!isValidPassword){
            throw new UnauthorizedError("Credenciais incorretas")
        }

        return SessionMapper.toResponse(user)
    }
}