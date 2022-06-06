import { Card, PrismaClient } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { IFindCardByData } from "../../domain/requestDto";
import { IFindCardByDataRepository } from "./interface/IFindCardByDataRepository";

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
