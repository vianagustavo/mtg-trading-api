import { prismaClient } from "../../database/prismaClient";
import { NotFound } from "../../domain/error";
import { GetCardByIdService } from "./getCardByIdService";

class DeleteCardListingService {
  async execute(id: string, ownerId: string) {
    const getCardByIdService = new GetCardByIdService();
    const cardListing = await getCardByIdService.execute(id, ownerId);

    await prismaClient.card.delete({
      where: {
        id: cardListing.id
      }
    });
  }
}

export { DeleteCardListingService };
