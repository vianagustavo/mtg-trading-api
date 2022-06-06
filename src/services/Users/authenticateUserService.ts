import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { InvalidArgument } from "../../domain/error";
import { IAuthenticateUserRequest } from "../../domain/requestDto";
import { IFindUserByEmailRepository } from "../../repositories/User/interface/IFindUserRepository";

class AuthenticateUserService {
  private findUserByEmailRepository: IFindUserByEmailRepository;

  constructor(findUserByEmailRepository: IFindUserByEmailRepository) {
    this.findUserByEmailRepository = findUserByEmailRepository;
  }
  async execute({ email, password }: IAuthenticateUserRequest) {
    const user = await this.findUserByEmailRepository.findUserByEmail(email);

    if (!user) {
      throw new InvalidArgument("Email/Password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new InvalidArgument("Email/Password incorrect");
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
