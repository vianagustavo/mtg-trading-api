export interface IDeleteCardListingRepository {
  deleteCardListing(id: string): Promise<void>;
}
