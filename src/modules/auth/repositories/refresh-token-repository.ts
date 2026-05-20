import crypto from "node:crypto"
import { redis } from "../../../infra/redis/redis-client.js"
import { RefreshToken, UserId } from "./types.js"

export class RefreshTokenRepository {
    private prefix = "refresh-token:"
    private timeToLive = 60 * 60 * 24 * 7 //1 semana

    async create({ userId }: { userId: UserId }): Promise<RefreshToken> {
        const refreshToken = crypto.randomBytes(64).toString('hex')//Gera um número criptografado com 64 caracteres (padrão para refresh token) e converte o resultado (buffer) para hexadecimal (contem apenas letras e numeros, muito padrão tambem)
        const key = `${this.prefix}${refreshToken}`
        
        const value = JSON.stringify({
            userId,
            createdAt: new Date().toISOString()
        })

        await redis.set(key, value, 'EX', this.timeToLive)

        return refreshToken
    }

    async findByRefreshToken({ refreshToken }: { refreshToken: RefreshToken }): Promise<RefreshToken | null> {
        const key = `${this.prefix}${refreshToken}`
        return await redis.get(key)
    }

    async revoke({ refreshToken }: { refreshToken: RefreshToken }): Promise<void> {
        const key = `${this.prefix}${refreshToken}`
        await redis.del(key)
    }
}