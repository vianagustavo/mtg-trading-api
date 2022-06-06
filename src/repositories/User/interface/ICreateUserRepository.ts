import { User } from "@prisma/client";
import { ICreateUserRequest } from "../../../domain/requestDto";

export interface ICreateUserRepository {
  createUser(data: ICreateUserRequest): Promise<User>;
}
