import { boolean, number, object, string, TypeOf } from "zod";

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

export const authenticateUserSchema = object({
  body: object({
    password: string({
      required_error: "loginPassword is required"
    }),
    email: string({
      required_error: "Email is required"
    }).email("Not a valid Email")
  })
});

export type AuthenticateUserInput = TypeOf<typeof authenticateUserSchema>;

export const createCardSchema = object({
  body: object({
    name: string({
      required_error: "Name is required"
    }),
    edition: string({
      required_error: "edition is required"
    }),
    language: string({
      required_error: "Language is required"
    }),
    foil: boolean({
      required_error: "Foil type is required"
    }),
    price: number({
      required_error: "Price is required"
    }),
    quantity: number({
      required_error: "Quantity is required"
    })
  })
});

export type CreateCardInput = TypeOf<typeof createCardSchema>;
