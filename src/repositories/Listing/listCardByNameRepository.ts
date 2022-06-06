import { Card, PrismaClient } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { IListCardByNameRepository } from "./interface/IListCardByNameRepository";

export class listCardByNameRepository implements IListCardByNameRepository {
  private prismaClient: PrismaClient;
  constructor() {
    this.prismaClient = prismaClient;
  }

  async listCardByName(name: string, ownerId: string): Promise<Card[]> {
    const cards = await this.prismaClient.card.findMany({
      where: {
        name,
        ownerId
      },
      orderBy: {
        price: "desc"
      }
    });

    return cards;
  }
}
