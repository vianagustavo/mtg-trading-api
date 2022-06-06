import { PrismaClient, User } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { ICreateUserRequest } from "../../domain/requestDto";
import { ICreateUserRepository } from "./interface/ICreateUserRepository";

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
