import { prisma } from "../../../infra/database/connection.js";
import { FindByEmailRepositoryInput, FindByEmailRepositoryOutput, FindByIdRepositoryInput, FindByIdRepositoryOutput, RegisterUserRepositoryInput, RegisterUserRepositoryOutput } from "./types.js";

export class SessionRepository {
    async register(data: RegisterUserRepositoryInput): Promise<RegisterUserRepositoryOutput> {
        const user = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: data.password,
            }
        })

        return user
    }


    async findByEmail({ email }: FindByEmailRepositoryInput): Promise<FindByEmailRepositoryOutput> {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        return user
    }

    async findById({ id }: FindByIdRepositoryInput): Promise<FindByIdRepositoryOutput> {
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        })

        return user
    }

}