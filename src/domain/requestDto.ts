import { Language } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";

export interface ICreateListingRequest {
    name: string;
    edition: string;
    language: Language;
    foil: boolean;
    price: number;
    quantity: number;
}

export interface ICreateListingResponse {
    id: string;
    name: string;
    edition: string;
    language: Language;
    foil: boolean;
    price: Decimal;
    quantity: number;
    created_at: Date;
    updated_at: Date;
}