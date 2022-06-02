import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { InvalidArgument } from "../../app";
import { prismaClient } from "../../database/prismaClient";
import { IAuthenticateUserRequest } from "../../domain/requestDto";


class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateUserRequest) {
    const user = await prismaClient.user.findUnique({
      where: {
        email
      }
    });

    if (!user) {
      throw new InvalidArgument("Email/Password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }

    const token = sign(
      {
        login: user.email
      },
      `${process.env.USER_SECRET}`,
      {
        subject: user.id,
        expiresIn: "1d"
      }
    );

    return token;
  }
}

export { AuthenticateUserService };
