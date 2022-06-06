import { Request, Response } from "express";
import { IAuthenticateUserRequest } from "../../domain/requestDto";
import { findUserByEmailRepository } from "../../repositories/User/findUserByEmailRepository";
import { AuthenticateUserService } from "../../services/Users/authenticateUserService";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password }: IAuthenticateUserRequest = request.body;

    const authenticateUserService = new AuthenticateUserService(
      new findUserByEmailRepository()
    );
    const tokenJwt = await authenticateUserService.execute({ email, password });

    const responseJwt = {
      token: tokenJwt
    };

    return response.json(responseJwt);
  }
}

export { AuthenticateUserController };
