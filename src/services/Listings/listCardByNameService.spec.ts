import { Card } from "@prisma/client";
import { mockCardListingArray } from "../../_mocks/cardListingMock";
import { IListCardByNameRepository } from "../../domain/interface/repositories/Listing/IListCardByNameRepository";
import { ListCardByNameService } from "./listCardByNameService";

describe("List Card by Name", () => {
  it("Should be able to list cards by name", async () => {
    const cards = mockCardListingArray();
    const getCard = cards[0];
    class MockListCardByNameRepository implements IListCardByNameRepository {
      listCardByName(name: string, ownerId: string): Promise<Card[]> {
        return Promise.resolve(cards);
      }
    }

    const listCardByNameService = new ListCardByNameService(
      new MockListCardByNameRepository()
    );

    const execute = await listCardByNameService.execute(
      getCard.name,
      getCard.ownerId
    );

    expect(execute[0].name).toBe(getCard.name);
  });
});
