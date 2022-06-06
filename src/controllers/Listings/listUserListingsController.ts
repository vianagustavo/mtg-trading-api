import { Request, Response } from "express";
import { RequestWithUserId } from "../../domain/requestDto";
import { listUserListingsRepository } from "../../repositories/Listing/listUserListingsRepository";
import { ListUserListingsService } from "../../services/Listings/listUserListingsService";

class ListUserListingsController {
  async handle(request: Request, response: Response) {
    const listPlayerListingsService = new ListUserListingsService(
      new listUserListingsRepository()
    );
    const ownerId = (request as RequestWithUserId).user_id;
    const list = await listPlayerListingsService.execute(ownerId);

    return response.json(list);
  }
}

export { ListUserListingsController };
