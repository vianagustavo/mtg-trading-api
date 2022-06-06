import { Card } from "@prisma/client";
import { mockCardListingArray } from "../../_mocks/cardListingMock";
import { IListUserListingsRepository } from "../../domain/interface/repositories/Listing/IListUserListingsRepository";
import { ListUserListingsService } from "./listUserListingsService";

describe("Create Card Listing", () => {
  it("Should be able to create a card listing", async () => {
    const cards = mockCardListingArray();
    class MockListUserListingsRepository
      implements IListUserListingsRepository
    {
      listUserListings(ownerId: string): Promise<Card[]> {
        return Promise.resolve(cards);
      }
    }
    const listUserListingsService = new ListUserListingsService(
      new MockListUserListingsRepository()
    );

    const execute = await listUserListingsService.execute(cards[0].ownerId);

    expect(execute[0].ownerId).toBe(cards[0].ownerId);
  });
});
