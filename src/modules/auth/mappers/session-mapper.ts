import { User } from "../entities/user.js";
import { RegisterUserRepositoryOutput } from "../repositories/types.js";
import { RegisterUserOutput } from "../schemas/register-user-schema.js";

export class SessionMapper {
    static toResponse(data: RegisterUserRepositoryOutput): RegisterUserOutput {
        return {
            id: data.id,
            name: data.name,
            email: data.email,
            created_at: data.created_at,
            updated_at: data.updated_at
        }
    }
}