import { FastifyInstance } from 'fastify'
import { ZodError } from 'zod'
import { AppError } from './app-error.js'

export async function globaErrorHandler(app: FastifyInstance) {
    app.setErrorHandler((error, request, reply) => {
        if (error instanceof AppError) {

            return reply.status(error.statusCode).send({
                message: error.message,
                code: error.code,
            })
        }

        if (error instanceof ZodError) {
            return reply.status(400).send({
                message: 'Houve um erro na validação dos dados',
                fields: error.flatten().fieldErrors,
                code: 'VALIDATION_ERROR',
            })
        }

        request.log.error(error)

        return reply.status(500).send({
            message: 'Houve um erro interno no servidor',
            code: 'INTERNAL_SERVER_ERROR',
        })
    })
}