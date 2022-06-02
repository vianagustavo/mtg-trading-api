import { Language } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
import { Request } from "express";

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

export interface ICreateUserRequest {
    name: string;
    email: string;
    loginPassword: string;
}

export interface ICreateUserResponse {
    id: string;
    name: string;
    email: string;
    created_at: Date;
    updated_at: Date;
}

export interface IPayload {
    sub: string;
  }

export interface IAuthenticateUserRequest {
    email: string;
    password: string;
  }

  export interface IUserIdWithRequest extends Request {
    user_id: string;
  }