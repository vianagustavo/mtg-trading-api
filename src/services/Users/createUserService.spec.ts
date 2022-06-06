import { User } from "@prisma/client";
import { ICreateUserRequest } from "../../domain/requestDto";
import { IFindUserByEmailRepository } from "../../domain/interface/repositories/User/IFindUserRepository";
import { mockUser } from "../../_mocks/userMock";
import { CreateUserService } from "./createUserService";
import { ICreateUserRepository } from "../../domain/interface/repositories/User/ICreateUserRepository";

describe("Create User", () => {
  it("Should be able to create an user", async () => {
    const user = mockUser();
    class MockCreateUserRepository implements ICreateUserRepository {
      createUser(data: ICreateUserRequest): Promise<User> {
        return Promise.resolve(user);
      }
    }
    class MockFindUserByEmailRepository implements IFindUserByEmailRepository {
      findUserByEmail(email: string): Promise<User | null> {
        return Promise.resolve(null);
      }
    }
    const createUserService = new CreateUserService(
      new MockCreateUserRepository(),
      new MockFindUserByEmailRepository()
    );
    const execute = await createUserService.execute({
      name: user.name,
      email: user.email,
      loginPassword: user.password
    });

    expect(execute.email).toBe(user.email);
  });
});
