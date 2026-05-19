import bcrypt from "bcryptjs";
import { BadRequestError } from "../../../shared/errors/domain-errors.js";
import { SessionMapper } from "../mappers/session-mapper.js";
import { SessionRepository } from "../repositories/session-repository.js";
import { RegisterUserInput, RegisterUserOutput } from "../schemas/register-user-schema.js";

export class RegisterUserService {
    constructor(private sessionRepository: SessionRepository) { }

    async execute(data: RegisterUserInput): Promise<RegisterUserOutput> {
        const user = await this.sessionRepository.findByEmail({ email: data.email })

        if (user) {
            throw new BadRequestError("Usuário ja cadastrado")
        }

        const hashedPassword = await bcrypt.hash(data.password, 10)

        if (!hashedPassword) {
            throw new BadRequestError("Erro ao criptografar senha")
        }

        const userResult = await this.sessionRepository.register({
            email: data.email,
            name: data.name,
            password: hashedPassword
        })

        return SessionMapper.toResponse({
            user: userResult,
            access_token: "",
            refresh_token: ""
        })
    }
}