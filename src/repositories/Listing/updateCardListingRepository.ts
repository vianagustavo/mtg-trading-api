import { Card, PrismaClient } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { IUpdateCardListingFilters } from "../../domain/requestDto";
import { IUpdateCardListingRepository } from "./interface/IUpdateCardListingRepository";

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
