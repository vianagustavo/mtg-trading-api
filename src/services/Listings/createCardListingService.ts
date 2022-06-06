import { InvalidArgument } from "../../domain/error";
import { ICreateListingRequest } from "../../domain/requestDto";
import { ICreateCardListingRepository } from "../../repositories/Listing/interface/ICreateCardListingRepository";
import { IFindCardByDataRepository } from "../../repositories/Listing/interface/IFindCardByDataRepository";

export type CreateListRequestWithOwnerId = ICreateListingRequest & {
  ownerId: string;
};

class CreateCardListingService {
  private createCardListingRepository: ICreateCardListingRepository;
  private findCardByDataRepository: IFindCardByDataRepository;

  constructor(
    createCardListingRepository: ICreateCardListingRepository,
    findCardByDataRepository: IFindCardByDataRepository
  ) {
    this.createCardListingRepository = createCardListingRepository;
    this.findCardByDataRepository = findCardByDataRepository;
  }

  async execute(data: CreateListRequestWithOwnerId) {
    data.price = parseFloat(data.price.toFixed(2));
    const cardListingExists =
      await this.findCardByDataRepository.findCardByData(data);

    if (cardListingExists) {
      throw new InvalidArgument("Card is already listed.");
    }

    const cardListing =
      await this.createCardListingRepository.createCardListing(data);
    return cardListing;
  }
}

export { CreateCardListingService };
