import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: "Name is required"
    }),
    loginPassword: string({
      required_error: "loginPassword is required"
    }).min(6, "Password too short"),
    email: string({
      required_error: "Email is required"
    }).email("Not a valid Email")
  })
});

export type CreateUserInput = TypeOf<typeof createUserSchema>;
