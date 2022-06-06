import { Card } from "@prisma/client";
import { IDeleteCardListingRepository } from "../../domain/interface/repositories/Listing/IDeleteCardListingRepository";
import { IFindCardByIdAndOwnerRepository } from "../../domain/interface/repositories/Listing/IFindCardByIdAndOwnerRepository";
import { mockCardListing } from "../../_mocks/cardListingMock";
import { DeleteCardListingService } from "./deleteCardListingService";

describe("Delete Card Listing", () => {
  it("Should be able to delete a card listing", async () => {
    const card = mockCardListing();

    class MockFindCardByIdAndOwnerRepository
      implements IFindCardByIdAndOwnerRepository
    {
      findCardByIdAndOwner(id: string, ownerId: string): Promise<Card | null> {
        return Promise.resolve(card);
      }
    }

    class MockDeleteCardListingRepository
      implements IDeleteCardListingRepository
    {
      deleteCardListing(id: string): Promise<void> {
        return Promise.resolve();
      }
    }

    const deleteCardListingService = new DeleteCardListingService(
      new MockDeleteCardListingRepository(),
      new MockFindCardByIdAndOwnerRepository()
    );

    const execute = deleteCardListingService.execute(card.id, card.ownerId);

    await expect(execute).resolves.not.toThrow();
  });
});
