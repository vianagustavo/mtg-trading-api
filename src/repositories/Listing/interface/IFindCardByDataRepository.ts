import { Card } from "@prisma/client";
import { IFindCardByData } from "../../../domain/requestDto";

export interface IFindCardByDataRepository {
  findCardByData(data: IFindCardByData): Promise<Card | null>;
}
