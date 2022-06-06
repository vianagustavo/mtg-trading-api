import { Card } from "@prisma/client";
import { IFindCardByData } from "../../domain/requestDto";
import { mockCardListing } from "../../_mocks/cardListingMock";
import { ICreateCardListingRepository } from "../../domain/interface/repositories/Listing/ICreateCardListingRepository";
import {
  CreateCardListingService,
  CreateListRequestWithOwnerId
} from "./createCardListingService";
import { IFindCardByDataRepository } from "../../domain/interface/repositories/Listing/IFindCardByDataRepository";

describe("Create Card Listing", () => {
  it("Should be able to create a card listing", async () => {
    const card = mockCardListing();
    class MockCreateCardListingRepository
      implements ICreateCardListingRepository
    {
      createCardListing(data: CreateListRequestWithOwnerId): Promise<Card> {
        return Promise.resolve(card);
      }
    }

    class MockFindCardByDataRepository implements IFindCardByDataRepository {
      findCardByData(data: IFindCardByData): Promise<Card | null> {
        return Promise.resolve(null);
      }
    }

    const createCardListingService = new CreateCardListingService(
      new MockCreateCardListingRepository(),
      new MockFindCardByDataRepository()
    );

    const execute = await createCardListingService.execute({
      name: card.name,
      edition: card.edition,
      foil: card.foil,
      language: card.language,
      ownerId: card.ownerId,
      quantity: card.quantity,
      price: 19.99
    });

    expect(execute.name).toBe(card.name);
  });
});
