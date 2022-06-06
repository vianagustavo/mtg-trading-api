import { prismaClient } from "../../database/prismaClient";
import { IListUserListingsRepository } from "../../repositories/Listing/interface/IListUserListingsRepository";

class ListUserListingsService {
  private listUserListingsRepository: IListUserListingsRepository;
  constructor(listUserListingsRepository: IListUserListingsRepository) {
    this.listUserListingsRepository = listUserListingsRepository;
  }
  async execute(ownerId: string) {
    return await this.listUserListingsRepository.listUserListings(ownerId);
  }
}

export { ListUserListingsService };
