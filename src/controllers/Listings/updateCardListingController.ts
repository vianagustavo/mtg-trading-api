import { Request, Response } from "express";
import {
  IUpdateCardListingFilters,
  RequestWithUserId
} from "../../domain/requestDto";
import { updateCardListingRepository } from "../../repositories/Listing/updateCardListingRepository";
import { UpdateCardListingService } from "../../services/Listings/updateCardListingService";

class UpdateCardListingController {
  async handle(request: Request, response: Response) {
    const id = request.params.id;
    const ownerId = (request as RequestWithUserId).user_id;
    const content: IUpdateCardListingFilters = request.body;

    const updateCardListingService = new UpdateCardListingService(
      new updateCardListingRepository()
    );
    const updatedCard = await updateCardListingService.execute(
      id,
      ownerId,
      content
    );

    return response.json(updatedCard);
  }
}

export { UpdateCardListingController };
