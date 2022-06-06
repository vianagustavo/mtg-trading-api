import { Card } from "@prisma/client";
import { IUpdateCardListingFilters } from "../../domain/requestDto";
import { mockCardListing } from "../../_mocks/cardListingMock";

import { IUpdateCardListingRepository } from "../../domain/interface/repositories/Listing/IUpdateCardListingRepository";
import { UpdateCardListingService } from "./updateCardListingService";
import { IFindCardByIdAndOwnerRepository } from "../../domain/interface/repositories/Listing/IFindCardByIdAndOwnerRepository";

describe("Update Card Listing", () => {
  it("Should be able to update a card listing", async () => {
    const card = mockCardListing();
    const info: IUpdateCardListingFilters = {
      quantity: 2,
      price: 2
    };
    class MockUpdateCardListingRepository
      implements IUpdateCardListingRepository
    {
      updateCardListing(
        id: string,
        info: IUpdateCardListingFilters
      ): Promise<Card> {
        return Promise.resolve(card);
      }
    }

    class MockFindCardByIdAndOwnerRepository
      implements IFindCardByIdAndOwnerRepository
    {
      findCardByIdAndOwner(id: string, ownerId: string): Promise<Card | null> {
        return Promise.resolve(card);
      }
    }

    const updateCardListingService = new UpdateCardListingService(
      new MockUpdateCardListingRepository(),
      new MockFindCardByIdAndOwnerRepository()
    );

    const execute = await updateCardListingService.execute(
      card.id,
      card.ownerId,
      info
    );

    console.log({ execute });
    console.log({ info });

    expect(execute.price).toBe(card.price);
  });
});
