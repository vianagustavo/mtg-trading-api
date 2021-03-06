import { Request, Response } from "express";
import { RequestWithUserId } from "../../domain/requestDto";
import { DeleteCardListingRepository } from "../../repositories/Listing/deleteCardListingRepository";
import { findCardByIdAndOwnerRepository } from "../../repositories/Listing/findCardByIdAndOwnerRepository";
import { DeleteCardListingService } from "../../services/Listings/deleteCardListingService";

class DeleteCardListingController {
  async handle(request: Request, response: Response) {
    const id = request.params.id;
    const ownerId = (request as RequestWithUserId).user_id;
    const deleteCardListingService = new DeleteCardListingService(
      new DeleteCardListingRepository(),
      new findCardByIdAndOwnerRepository()
    );
    await deleteCardListingService.execute(id, ownerId);

    return response.json();
  }
}

export { DeleteCardListingController };
