import { Request, Response } from "express";
import {
  ICreateListingRequest,
  ICreateListingResponse,
  RequestWithUserId
} from "../../domain/requestDto";
import { createCardListingRepository } from "../../repositories/Listing/createCardListingRepository";
import { findCardByDataRepository } from "../../repositories/Listing/findCardByDataRepository";
import { CreateCardListingService } from "../../services/Listings/createCardListingService";

class CreateCardListingController {
  async handle(request: Request, response: Response) {
    const {
      name,
      edition,
      language,
      foil,
      price,
      quantity
    }: ICreateListingRequest = request.body;

    const ownerId = (request as RequestWithUserId).user_id;
    const createCardListingService = new CreateCardListingService(
      new createCardListingRepository(),
      new findCardByDataRepository()
    );
    const cardListing: ICreateListingResponse =
      await createCardListingService.execute({
        name,
        edition,
        language,
        foil,
        price,
        quantity,
        ownerId
      });

    return response.json(cardListing);
  }
}

export { CreateCardListingController };
