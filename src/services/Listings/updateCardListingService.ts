import { prismaClient } from "../../database/prismaClient";
import { InvalidArgument, NotFound } from "../../domain/error";
import { IUpdateCardListingFilters } from "../../domain/requestDto";
import { GetCardByIdService } from "./getCardByIdService";

class UpdateCardListingService {
  async execute(id: string, ownerId: string, info: IUpdateCardListingFilters) {
    if (!info.price && !info.quantity) {
      throw new InvalidArgument("Invalid arguments.");
    }
    const getCardByIdService = new GetCardByIdService();
    const cardListing = await getCardByIdService.execute(id, ownerId);
    const roundedPrice = info.price?.toFixed(2);
    const newCardListing = await prismaClient.card.update({
      where: {
        id: cardListing.id
      },
      data: {
        price: roundedPrice,
        quantity: info.quantity
      }
    });

    return newCardListing;
  }
}

export { UpdateCardListingService };
