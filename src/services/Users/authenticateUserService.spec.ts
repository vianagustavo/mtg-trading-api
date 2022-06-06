import { User } from "@prisma/client";
import { hash } from "bcryptjs";
import { IFindUserByEmailRepository } from "../../domain/interface/repositories/User/IFindUserRepository";
import { mockUser } from "../../_mocks/userMock";
import { AuthenticateUserService } from "./authenticateUserService";

describe("Authenticate user", () => {
  it("Should be able to authenticate an user", async () => {
    const user = mockUser();
    const password = user.password;
    user.password = await hash(user.password, 10);

    class MockFindUserRepository implements IFindUserByEmailRepository {
      findUserByEmail(email: string): Promise<User | null> {
        return Promise.resolve(user);
      }
    }

    const authenticateUserService = new AuthenticateUserService(
      new MockFindUserRepository()
    );

    const tokenExecute = await authenticateUserService.execute({
      email: user.email,
      password
    });

    expect(tokenExecute).toBeTruthy();
  });
});
