import { User } from "@prisma/client";

export interface IFindUserByEmailRepository {
  findUserByEmail(email: string): Promise<User | null>;
}
