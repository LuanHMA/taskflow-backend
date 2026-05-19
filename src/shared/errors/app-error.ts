export interface AppErrorProps {
  message: string
  statusCode: number
  code?: string
}

export class AppError extends Error {
  public readonly statusCode: number
  public readonly code?: string

  constructor({ message, statusCode, code }: AppErrorProps) {
    super(message)

    this.name = this.constructor.name
    this.statusCode = statusCode
    this.code = code

    Error.captureStackTrace(this, this.constructor)
  }
}