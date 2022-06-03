import { Request, Response } from "express";
import { RequestWithUserId } from "../../domain/requestDto";
import { ListPlayerListingService } from "../../services/Listings/listPlayerListingsService";

class ListPlayerListingsController {
  async handle(request: Request, response: Response) {
    const listPlayerListingsService = new ListPlayerListingService();
    const ownerId = (request as RequestWithUserId).user_id;
    const list = await listPlayerListingsService.execute(ownerId);

    return response.json(list);
  }
}

export { ListPlayerListingsController };
