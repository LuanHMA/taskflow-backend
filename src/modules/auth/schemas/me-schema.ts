import z from "zod";
import { User } from "../entities/user.js";

export type MeInput = User["id"]

export type MeOutput = Omit<User, "password">