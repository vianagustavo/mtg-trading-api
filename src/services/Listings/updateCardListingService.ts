import { InvalidArgument } from "../../domain/error";
import { IUpdateCardListingRepository } from "../../domain/interface/repositories/Listing/IUpdateCardListingRepository";
import { IUpdateCardListingFilters } from "../../domain/requestDto";
import { findCardByIdAndOwnerRepository } from "../../repositories/Listing/findCardByIdAndOwnerRepository";
import { GetCardByIdService } from "./getCardByIdService";

class UpdateCardListingService {
  private updateCardListingRepository: IUpdateCardListingRepository;
  constructor(updateCardListingRepository: IUpdateCardListingRepository) {
    this.updateCardListingRepository = updateCardListingRepository;
  }
  async execute(id: string, ownerId: string, info: IUpdateCardListingFilters) {
    if (!info.price && !info.quantity) {
      throw new InvalidArgument("Invalid arguments.");
    }
    if (info.price !== undefined) {
      info.price = parseFloat(info.price.toFixed(2));
    }
    const getCardByIdService = new GetCardByIdService(
      new findCardByIdAndOwnerRepository()
    );
    const cardListing = await getCardByIdService.execute(id, ownerId);

    const newCardListing =
      await this.updateCardListingRepository.updateCardListing(
        cardListing.id,
        info
      );

    return newCardListing;
  }
}

export { UpdateCardListingService };
