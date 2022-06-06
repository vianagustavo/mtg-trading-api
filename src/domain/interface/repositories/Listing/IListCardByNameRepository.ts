import { Card } from "@prisma/client";

export interface IListCardByNameRepository {
  listCardByName(name: string, ownerId: string): Promise<Card[]>;
}
