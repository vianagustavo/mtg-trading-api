import { Card } from "@prisma/client";
import { CreateListRequestWithOwnerId } from "../../../services/Listings/createCardListingService";

export interface ICreateCardListingRepository {
  createCardListing(data: CreateListRequestWithOwnerId): Promise<Card>;
}
