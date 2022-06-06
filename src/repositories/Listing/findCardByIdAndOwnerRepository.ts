import { Card, PrismaClient } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { IFindCardByIdAndOwnerRepository } from "../../domain/interface/repositories/Listing/IFindCardByIdAndOwnerRepository";

export class findCardByIdAndOwnerRepository
  implements IFindCardByIdAndOwnerRepository
{
  private prismaClient: PrismaClient;
  constructor() {
    this.prismaClient = prismaClient;
  }

  async findCardByIdAndOwner(
    id: string,
    ownerId: string
  ): Promise<Card | null> {
    const cardListing = await this.prismaClient.card.findFirst({
      where: {
        id,
        ownerId
      }
    });

    return cardListing;
  }
}
