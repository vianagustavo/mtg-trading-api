import { Request, Response } from "express";
import {
  ICreateUserRequest,
  ICreateUserResponse
} from "../../domain/requestDto";
import { CreateUserService } from "../../services/Users/createUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, loginPassword }: ICreateUserRequest = request.body;

    const createUserService = new CreateUserService();
    const userResponse: ICreateUserResponse = await createUserService.execute({
      name,
      email,
      loginPassword
    });

    return response.json(userResponse);
  }
}

export { CreateUserController };
