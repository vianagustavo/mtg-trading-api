import { Request, Response } from "express";
import { ListPlayerListingService } from "../../services/Listings/listPlayerListingsService";

class ListPlayerListingsController {
  async handle(request: Request, response: Response) {
    const listPlayerListingsService = new ListPlayerListingService();
    const list = await listPlayerListingsService.execute();

    return response.json(list);
  }
}

export { ListPlayerListingsController };
