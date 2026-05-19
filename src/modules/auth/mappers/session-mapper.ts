import { User } from "../entities/user.js";
import { RegisterUserOutput } from "../schemas/register-user-schema.js";

type toResponseInput = {
    user: User,
    access_token: string,
    refresh_token: string
}

export class SessionMapper {
    static toResponse(data: toResponseInput): RegisterUserOutput {
        return {
            user: {
                id: data.user.id,
                name: data.user.name,
                email: data.user.email,
                created_at: data.user.created_at,
                updated_at: data.user.updated_at
            },
            access_token: data.access_token,
            refresh_token: data.refresh_token
        }
    }
}