import { NotFound } from "../../domain/error";
import { IFindCardByIdAndOwnerRepository } from "../../repositories/Listing/interface/IFindCardByIdAndOwnerRepository";

class GetCardByIdService {
  private findCardByIdAndOwnerRepository: IFindCardByIdAndOwnerRepository;
  constructor(findCardByIdAndOwnerRepository: IFindCardByIdAndOwnerRepository) {
    this.findCardByIdAndOwnerRepository = findCardByIdAndOwnerRepository;
  }
  async execute(id: string, ownerId: string) {
    const cardListing =
      await this.findCardByIdAndOwnerRepository.findCardByIdAndOwner(
        id,
        ownerId
      );

    if (cardListing === null) {
      throw new NotFound("Card not found");
    }

    return cardListing;
  }
}

export { GetCardByIdService };
