import { Card, PrismaClient } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { IUpdateCardListingRepository } from "../../domain/interface/repositories/Listing/IUpdateCardListingRepository";
import { IUpdateCardListingFilters } from "../../domain/requestDto";

export class updateCardListingRepository
  implements IUpdateCardListingRepository
{
  private prismaClient: PrismaClient;
  constructor() {
    this.prismaClient = prismaClient;
  }

  async updateCardListing(
    id: string,
    info: IUpdateCardListingFilters
  ): Promise<Card> {
    const updatedCard = await this.prismaClient.card.update({
      where: {
        id
      },
      data: {
        price: info.price,
        quantity: info.quantity
      }
    });
    return updatedCard;
  }
}
