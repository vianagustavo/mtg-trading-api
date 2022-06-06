import { Card } from "@prisma/client";

export interface IFindCardByIdAndOwnerRepository {
  findCardByIdAndOwner(id: string, ownerId: string): Promise<Card | null>;
}
