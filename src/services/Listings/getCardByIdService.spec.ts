import { Card } from "@prisma/client";
import { IDeleteCardListingRepository } from "../../domain/interface/repositories/Listing/IDeleteCardListingRepository";
import { IFindCardByIdAndOwnerRepository } from "../../domain/interface/repositories/Listing/IFindCardByIdAndOwnerRepository";
import { mockCardListing } from "../../_mocks/cardListingMock";
import { DeleteCardListingService } from "./deleteCardListingService";
import { GetCardByIdService } from "./getCardByIdService";

describe("Create Card Listing", () => {
  it("Should be able get a card by id and ownerId", async () => {
    const card = mockCardListing();

    class MockFindCardByIdAndOwnerRepository
      implements IFindCardByIdAndOwnerRepository
    {
      findCardByIdAndOwner(id: string, ownerId: string): Promise<Card | null> {
        return Promise.resolve(card);
      }
    }

    const findCardByIdAndOwnerService = new GetCardByIdService(
      new MockFindCardByIdAndOwnerRepository()
    );

    const execute = await findCardByIdAndOwnerService.execute(
      card.id,
      card.ownerId
    );

    expect(execute.id).toBe(card.id);
  });
});
