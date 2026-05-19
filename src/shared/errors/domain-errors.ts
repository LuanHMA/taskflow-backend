import { AppError } from "./app-error.js";

export class BadRequestError extends AppError {
    constructor(message = 'Falha na solicitação') {
        super({
            message,
            statusCode: 400,
            code: 'BAD_REQUEST',
        })
    }
}

export class NotFoundError extends AppError {
    constructor(message = 'Recurso não encontrado') {
        super({
            message,
            statusCode: 404,
            code: 'NOT_FOUND',
        })
    }
}

export class UnauthorizedError extends AppError {
    constructor(message = 'Credenciais inválidas') {
        super({
            message,
            statusCode: 401,
            code: 'UNAUTHORIZED',
        })
    }
}

export class ForbiddenError extends AppError {
    constructor(message = 'Acesso negado') {
        super({
            message,
            statusCode: 403,
            code: 'FORBIDDEN',
        })
    }
}