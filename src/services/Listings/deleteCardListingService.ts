import { IDeleteCardListingRepository } from "../../domain/interface/repositories/Listing/IDeleteCardListingRepository";
import { GetCardByIdService } from "./getCardByIdService";
import { IFindCardByIdAndOwnerRepository } from "../../domain/interface/repositories/Listing/IFindCardByIdAndOwnerRepository";

class DeleteCardListingService {
  private deleteCardListingRepository: IDeleteCardListingRepository;
  private findCardByIdAndOwnerRepository: IFindCardByIdAndOwnerRepository;

  constructor(
    deleteCardListingRepository: IDeleteCardListingRepository,
    findCardByIdAndOwnerRepository: IFindCardByIdAndOwnerRepository
  ) {
    this.deleteCardListingRepository = deleteCardListingRepository;
    this.findCardByIdAndOwnerRepository = findCardByIdAndOwnerRepository;
  }
  async execute(id: string, ownerId: string) {
    const getCardByIdService = new GetCardByIdService(
      this.findCardByIdAndOwnerRepository
    );
    const cardListing = await getCardByIdService.execute(id, ownerId);

    await this.deleteCardListingRepository.deleteCardListing(cardListing.id);
  }
}

export { DeleteCardListingService };
