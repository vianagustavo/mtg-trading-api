import { Card, PrismaClient } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { CreateListRequestWithOwnerId } from "../../services/Listings/createCardListingService";
import { ICreateCardListingRepository } from "../../domain/interface/repositories/Listing/ICreateCardListingRepository";

export class createCardListingRepository
  implements ICreateCardListingRepository
{
  private prismaClient: PrismaClient;
  constructor() {
    this.prismaClient = prismaClient;
  }

  async createCardListing(data: CreateListRequestWithOwnerId): Promise<Card> {
    const cardListing = await this.prismaClient.card.create({
      data: {
        name: data.name,
        edition: data.edition,
        foil: data.foil,
        language: data.language,
        price: data.price,
        quantity: data.quantity,
        ownerId: data.ownerId
      }
    });

    return cardListing;
  }
}
