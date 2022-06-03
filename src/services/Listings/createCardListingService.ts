import { prismaClient } from "../../database/prismaClient";
import { InvalidArgument } from "../../domain/error";
import { ICreateListingRequest } from "../../domain/requestDto";

type CreateListRequestWithOwnerId = ICreateListingRequest & { ownerId: string };

class CreateCardListingService {
  async execute(info: CreateListRequestWithOwnerId) {
    const { name, edition, language, foil, price, quantity, ownerId } = info;
    const roundedPrice = price.toFixed(2);
    const cardListingExists = await prismaClient.card.findFirst({
      where: {
        name,
        edition,
        language,
        foil,
        price: roundedPrice,
        ownerId
      }
    });
    if (cardListingExists) {
      throw new InvalidArgument("Card is already listed.");
    }
    const cardListing = await prismaClient.card.create({
      data: {
        name,
        edition,
        language,
        foil,
        price: roundedPrice,
        quantity,
        ownerId
      }
    });
    return cardListing;
  }
}

export { CreateCardListingService };
