import { Card } from "@prisma/client";
import { IUpdateCardListingFilters } from "../../../requestDto";

export interface IUpdateCardListingRepository {
  updateCardListing(id: string, info: IUpdateCardListingFilters): Promise<Card>;
}
