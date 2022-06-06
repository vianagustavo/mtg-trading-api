import { Card } from "@prisma/client";
import { IUpdateCardListingFilters } from "../../../domain/requestDto";

export interface IUpdateCardListingRepository {
  updateCardListing(id: string, info: IUpdateCardListingFilters): Promise<Card>;
}
