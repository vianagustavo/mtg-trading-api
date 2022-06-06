import { PrismaClient, User } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { ICreateUserRepository } from "../../domain/interface/repositories/User/ICreateUserRepository";
import { ICreateUserRequest } from "../../domain/requestDto";

export class createUserRepository implements ICreateUserRepository {
  private prismaClient: PrismaClient;
  constructor() {
    this.prismaClient = prismaClient;
  }

  async createUser(data: ICreateUserRequest): Promise<User> {
    const user = await this.prismaClient.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.loginPassword
      }
    });

    return user;
  }
}
