import { User } from "../entities/user.js"

export type RegisterUserRepositoryInput = Pick<User, "email" | "name" | "password">
export type RegisterUserRepositoryOutput = User

export type FindByEmailRepositoryInput = Pick<User, "email">
export type FindByEmailRepositoryOutput = User | null