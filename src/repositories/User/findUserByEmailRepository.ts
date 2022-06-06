import { PrismaClient, User } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { IFindUserByEmailRepository } from "../../domain/interface/repositories/User/IFindUserRepository";

export class findUserByEmailRepository implements IFindUserByEmailRepository {
  private prismaClient: PrismaClient;
  constructor() {
    this.prismaClient = prismaClient;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await this.prismaClient.user.findUnique({
      where: {
        email
      }
    });

    return user;
  }
}
