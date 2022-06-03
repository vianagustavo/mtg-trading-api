import { prismaClient } from "../../database/prismaClient";

class ListPlayerListingService {
  async execute(ownerId: string) {
    return await prismaClient.card.findMany({
      where: {
        ownerId
      },
      orderBy: {
        price: "desc"
      }
    });
  }
}

export { ListPlayerListingService };
