import { Card, PrismaClient } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { IFindCardByDataRepository } from "../../domain/interface/repositories/Listing/IFindCardByDataRepository";
import { IFindCardByData } from "../../domain/requestDto";

export class findCardByDataRepository implements IFindCardByDataRepository {
  private prismaClient: PrismaClient;
  constructor() {
    this.prismaClient = prismaClient;
  }

  async findCardByData(data: IFindCardByData): Promise<Card | null> {
    const cardListing = await this.prismaClient.card.findFirst({
      where: {
        ...data
      }
    });

    return cardListing;
  }
}
