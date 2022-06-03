import { prismaClient } from "../../database/prismaClient";
import { NotFound } from "../../domain/error";

class GetCardByIdService {
  async execute(id: string, ownerId: string) {
    const cardListing = await prismaClient.card.findFirst({
      where: {
        id,
        ownerId
      }
    });

    if (cardListing === null) {
      throw new NotFound("Card not found");
    }

    return cardListing;
  }
}

export { GetCardByIdService };
