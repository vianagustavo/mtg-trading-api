import { Request, Response } from "express";
import {
  ICreateUserRequest,
  ICreateUserResponse
} from "../../domain/requestDto";
import { createUserRepository } from "../../repositories/User/createUserRepository";
import { findUserByEmailRepository } from "../../repositories/User/findUserByEmailRepository";
import { CreateUserService } from "../../services/Users/createUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, loginPassword }: ICreateUserRequest = request.body;

    const createUserService = new CreateUserService(
      new createUserRepository(),
      new findUserByEmailRepository()
    );
    const userResponse: ICreateUserResponse = await createUserService.execute({
      name,
      email,
      loginPassword
    });

    return response.json(userResponse);
  }
}

export { CreateUserController };
