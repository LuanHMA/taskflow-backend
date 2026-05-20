import { User } from "../entities/user.js"

//Session Repository
export type RegisterUserRepositoryInput = Pick<User, "email" | "name" | "password">
export type RegisterUserRepositoryOutput = User

export type FindByEmailRepositoryInput = Pick<User, "email">
export type FindByEmailRepositoryOutput = User | null

export type FindByIdRepositoryInput = Pick<User, "id">
export type FindByIdRepositoryOutput = User | null


export type UserId = User["id"]
export type RefreshToken = string