import { hash } from "bcryptjs";
import { InvalidArgument } from "../../domain/error";
import { ICreateUserRequest } from "../../domain/requestDto";
import { IFindUserByEmailRepository } from "../../domain/interface/repositories/User/IFindUserRepository";
import { ICreateUserRepository } from "../../domain/interface/repositories/User/ICreateUserRepository";

class CreateUserService {
  private createUserRepository: ICreateUserRepository;
  private findUserByEmailRepository: IFindUserByEmailRepository;

  constructor(
    createUserRepository: ICreateUserRepository,
    findUserByEmailRepository: IFindUserByEmailRepository
  ) {
    this.createUserRepository = createUserRepository;
    this.findUserByEmailRepository = findUserByEmailRepository;
  }

  async execute({ name, email, loginPassword }: ICreateUserRequest) {
    const emailExists = await this.findUserByEmailRepository.findUserByEmail(
      email
    );
    if (emailExists) {
      throw new InvalidArgument("Email is already in use.");
    }
    const passwordHash = await hash(loginPassword, 10);
    const user = await this.createUserRepository.createUser({
      name,
      email,
      loginPassword: passwordHash
    });

    const { password, ...newUser } = user;

    return newUser;
  }
}

export { CreateUserService };
