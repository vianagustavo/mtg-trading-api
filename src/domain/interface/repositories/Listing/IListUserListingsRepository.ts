import { Card } from "@prisma/client";

export interface IListUserListingsRepository {
  listUserListings(ownerId: string): Promise<Card[]>;
}
