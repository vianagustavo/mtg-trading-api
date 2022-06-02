import { Request, Response } from "express";
import {
  ICreateListingRequest,
  ICreateListingResponse
} from "../../domain/requestDto";
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

    const createCardListingService = new CreateCardListingService();
    const cardListing: ICreateListingResponse =
      await createCardListingService.execute({
        name,
        edition,
        language,
        foil,
        price,
        quantity
      });

    return response.json(cardListing);
  }
}

export { CreateCardListingController };
