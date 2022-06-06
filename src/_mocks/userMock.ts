import { User } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

export function mockUser(): User {
  const user: User = {
    id: uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    created_at: new Date(),
    updated_at: new Date()
  };

  return user;
}
