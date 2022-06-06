import { Request, Response } from "express";
import { RequestWithUserId } from "../../domain/requestDto";
import { listCardByNameRepository } from "../../repositories/Listing/listCardByNameRepository";
import { ListCardByNameService } from "../../services/Listings/listCardByNameService";

class ListCardByNameController {
  async handle(request: Request, response: Response) {
    const name: string = request.params.name;
    const ownerId = (request as RequestWithUserId).user_id;
    const listCardService = new ListCardByNameService(
      new listCardByNameRepository()
    );
    const list = await listCardService.execute(name, ownerId);

    return response.json(list);
  }
}

export { ListCardByNameController };
