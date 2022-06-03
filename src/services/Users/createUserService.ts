import { hash } from "bcryptjs";
import { prismaClient } from "../../database/prismaClient";
import { InvalidArgument } from "../../domain/error";
import { ICreateUserRequest } from "../../domain/requestDto";

class CreateUserService {
  async execute({ name, email, loginPassword }: ICreateUserRequest) {
    const emailExists = await prismaClient.user.findUnique({
      where: {
        email
      }
    });
    if (emailExists) {
      throw new InvalidArgument("Email is already in use.");
    }
    const passwordHash = await hash(loginPassword, 10);
    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: passwordHash
      }
    });

    const { password, ...newUser } = user;

    return newUser;
  }
}

export { CreateUserService };
