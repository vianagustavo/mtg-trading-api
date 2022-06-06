import { Card } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";
import { Decimal } from "@prisma/client/runtime";

export function mockCardListing(): Card {
  const card: Card = {
    id: uuid(),
    name: faker.name.findName(),
    edition: faker.name.prefix(),
    foil: Math.random() < 0.5,
    language: "ENGLISH",
    ownerId: uuid(),
    price: new Decimal(2),
    quantity: parseInt(faker.random.numeric()),
    created_at: new Date(),
    updated_at: new Date()
  };

  return card;
}

export function mockCardListingArray(): Card[] {
  const card: Card[] = [
    {
      id: uuid(),
      name: faker.name.findName(),
      edition: faker.name.prefix(),
      foil: Math.random() < 0.5,
      language: "ENGLISH",
      ownerId: uuid(),
      price: new Decimal(2),
      quantity: parseInt(faker.random.numeric()),
      created_at: new Date(),
      updated_at: new Date()
    }
  ];

  return card;
}
