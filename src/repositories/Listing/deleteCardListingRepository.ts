import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";

import { IDeleteCardListingRepository } from "./interface/IDeleteCardListingRepository";

export class DeleteCardListingRepository
  implements IDeleteCardListingRepository
{
  private prismaClient: PrismaClient;
  constructor() {
    this.prismaClient = prismaClient;
  }

  async deleteCardListing(id: string): Promise<void> {
    await this.prismaClient.card.delete({
      where: {
        id
      }
    });
  }
}
