import { Request, Response } from "express";
import { ListCardService } from "../../services/Listings/listCardService";

class ListCardController {
  async handle(request: Request, response: Response) {
    const name: string = request.params.name;
    const listCardService = new ListCardService();
    const list = await listCardService.execute(name);

    return response.json(list);
  }
}

export { ListCardController };
