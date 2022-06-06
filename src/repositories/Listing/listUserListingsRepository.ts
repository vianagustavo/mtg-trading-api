import { Card, PrismaClient } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { IListUserListingsRepository } from "./interface/IListUserListingsRepository";

export class listUserListingsRepository implements IListUserListingsRepository {
  private prismaClient: PrismaClient;
  constructor() {
    this.prismaClient = prismaClient;
  }

  async listUserListings(ownerId: string): Promise<Card[]> {
    const cards = await this.prismaClient.card.findMany({
      where: {
        ownerId
      },
      orderBy: {
        price: "desc"
      }
    });

    return cards;
  }
}
