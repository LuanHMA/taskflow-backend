import crypto from "node:crypto"
import { redis } from "../../../infra/redis/redis-client.js"

export class RefreshTokenRepository {
    private prefix = "refresh-token:"
    private tokenLifeTime = 60 * 60 * 24 * 7 //1 semana

    async create({ userId }: { userId: string }): Promise<string> {
        const refreshToken = crypto.randomBytes(64).toString('hex')//Gera um número criptografado com 64 caracteres (padrão para refresh token) e converte o resultado (buffer) para hexadecimal (contem apenas letras e numeros, muito padrão tambem)
        const key = `${this.prefix}${refreshToken}`

        await redis.set(key, userId, 'EX', this.tokenLifeTime)

        return refreshToken
    }

    async findByRefreshToken({ refreshToken }: { refreshToken: string }): Promise<string | null> {
        const key = `${this.prefix}${refreshToken}`
        return await redis.get(key)
    }

    async revoke({ refreshToken }: { refreshToken: string }): Promise<void> {
        const key = `${this.prefix}${refreshToken}`
        await redis.del(key)
    }

    async revokeAllByUser({ userId }: { userId: string }): Promise<void> {
        const keys = await redis.keys(`${this.prefix}*`)

        keys.forEach(async (key) => {
            const storedUserId = await redis.get(key)

            if (storedUserId === userId) {
                await redis.del(key)
            }
        })
    }

}