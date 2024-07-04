import { User } from "../../page-actions/application/authentication";

interface TestUser {
  standardUser: User;
  lockedOutUser: User;
}

export const testUser: TestUser = {
  standardUser: {
    username: "standard_user",
    password: "secret_sauce",
  },
  lockedOutUser: {
    username: "locked_out_user",
    password: "secret_sauce",
  },
} as const;
