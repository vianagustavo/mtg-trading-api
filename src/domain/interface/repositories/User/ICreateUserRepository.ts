import { User } from "@prisma/client";
import { ICreateUserRequest } from "../../../requestDto";

export interface ICreateUserRepository {
  createUser(data: ICreateUserRequest): Promise<User>;
}
