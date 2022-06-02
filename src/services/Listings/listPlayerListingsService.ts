import { prismaClient } from "../../database/prismaClient";

class ListPlayerListingService {
  async execute() {
    return await prismaClient.cardListing.findMany();
  }
}

export { ListPlayerListingService };
