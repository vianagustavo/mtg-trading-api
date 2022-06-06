import { findCardByIdAndOwnerRepository } from "../../repositories/Listing/findCardByIdAndOwnerRepository";
import { IDeleteCardListingRepository } from "../../repositories/Listing/interface/IDeleteCardListingRepository";
import { GetCardByIdService } from "./getCardByIdService";

class DeleteCardListingService {
  private deleteCardListingRepository: IDeleteCardListingRepository;

  constructor(deleteCardListingRepository: IDeleteCardListingRepository) {
    this.deleteCardListingRepository = deleteCardListingRepository;
  }
  async execute(id: string, ownerId: string) {
    const getCardByIdService = new GetCardByIdService(
      new findCardByIdAndOwnerRepository()
    );
    const cardListing = await getCardByIdService.execute(id, ownerId);

    await this.deleteCardListingRepository.deleteCardListing(cardListing.id);
  }
}

export { DeleteCardListingService };
