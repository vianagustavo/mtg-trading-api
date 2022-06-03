import { prismaClient } from "../../database/prismaClient";

class ListCardService {
  async execute(name: string, ownerId: string) {
    return await prismaClient.card.findMany({
      where: {
        name,
        ownerId
      },
      orderBy: {
        price: "desc"
      }
    });
  }
}

export { ListCardService };
