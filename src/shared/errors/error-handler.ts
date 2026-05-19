import { FastifyInstance } from 'fastify'
import { ZodError } from 'zod'
import { AppError } from './app-error.js'

export async function errorHandler(app: FastifyInstance) {
    app.setErrorHandler((error, request, reply) => {
        if (error instanceof AppError) {
            return reply.status(error.statusCode).send({
                statusCode: error.statusCode,
                code: error.code,
                message: error.message,
            })
        }

        if (error instanceof ZodError) {
            return reply.status(400).send({
                statusCode: 400,
                code: 'VALIDATION_ERROR',
                message: 'Houve um erro de validação dos dados',
                issues: error.flatten().fieldErrors,
            })
        }

        request.log.error(error)

        return reply.status(500).send({
            statusCode: 500,
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Houve um erro interno no servidor',
        })
    })
}