import { User } from "../page-actions/authentication";

interface TestUser {
  standardUser: User;
  lockedOutUser: User;
}

export const user: TestUser = {
  standardUser: {
    username: "standard_user",
    password: "secret_sauce",
  },
  lockedOutUser: {
    username: "locked_out_user",
    password: "secret_sauce",
  },
} as const;
