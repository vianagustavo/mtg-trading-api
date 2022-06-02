import { prismaClient } from "../../database/prismaClient";
import { ICreateListingRequest } from "../../domain/requestDto";



class CreateCardListingService {
async execute({name, edition, language, foil, price, quantity}:ICreateListingRequest){
    
    const roundedPrice = price.toFixed(2)
    const cardListing = await prismaClient.cardListing.create({
        data: {
            name,
            edition,
            language,
            foil,
            price: roundedPrice,
            quantity
        }
    })
    return cardListing;
}

}

export {CreateCardListingService}