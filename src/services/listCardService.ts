import { prismaClient } from "../database/prismaClient"


class ListCardService {
async execute(name: string) {
    return await prismaClient.cardListing.findMany(
  {
     where:
    {
        name
    }
  });
 }

}

export { ListCardService }