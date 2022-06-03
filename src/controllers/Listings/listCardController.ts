import { Request, Response } from "express";
import { RequestWithUserId } from "../../domain/requestDto";
import { ListCardService } from "../../services/Listings/listCardService";

class ListCardController {
  async handle(request: Request, response: Response) {
    const name: string = request.params.name;
    const ownerId = (request as RequestWithUserId).user_id;
    const listCardService = new ListCardService();
    const list = await listCardService.execute(name, ownerId);

    return response.json(list);
  }
}

export { ListCardController };
