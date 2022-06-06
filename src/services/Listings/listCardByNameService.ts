import { IListCardByNameRepository } from "../../domain/interface/repositories/Listing/IListCardByNameRepository";

class ListCardByNameService {
  private listCardByNameRepository: IListCardByNameRepository;

  constructor(listCardByNameRepository: IListCardByNameRepository) {
    this.listCardByNameRepository = listCardByNameRepository;
  }
  async execute(name: string, ownerId: string) {
    return await this.listCardByNameRepository.listCardByName(name, ownerId);
  }
}

export { ListCardByNameService };
