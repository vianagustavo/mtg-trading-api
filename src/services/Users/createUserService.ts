import { hash } from "bcryptjs";
import { prismaClient } from "../../database/prismaClient";
import { ICreateUserRequest } from "../../domain/requestDto";

class CreateUserService {
  async execute({ name, email, loginPassword }: ICreateUserRequest) {
    const passwordHash = await hash(loginPassword, 10);
    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: passwordHash
      }
    });

    const { password, ...newUser } = user

    return newUser;
  }
}

export { CreateUserService };
