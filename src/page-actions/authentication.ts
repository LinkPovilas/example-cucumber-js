import { expect, Page } from "@playwright/test";
import { user } from "../data/user";
import { goToLandingPage } from "./navigation";

export type UserType = "standard_user" | "locked_out_user";

export interface User {
  username: string;
  password: string;
}

export const enterUsername = async (page: Page, username: string) => {
  await page.getByTestId("username").fill(username);
};

export const enterPassword = async (page: Page, password: string) => {
  await page.getByTestId("password").fill(password);
};

export const clickLoginButton = async (page: Page) => {
  await page.getByTestId("login-button").click();
};

export const verifyLoginError = async (page: Page, message: string) => {
  expect(await page.getByTestId("error").textContent()).toMatch(
    new RegExp(message, "i")
  );
};

const getUserByType = (userType: UserType) => {
  switch (userType) {
    case "standard_user":
      return user.standardUser;
    case "locked_out_user":
      return user.lockedOutUser;
    default:
      throw new Error("Invalid user");
  }
};

export const loginAs = async (page: Page, userType: UserType) => {
  const { username, password } = getUserByType(userType);
  await goToLandingPage(page);
  await enterUsername(page, username);
  await enterPassword(page, password);
  await clickLoginButton(page);
};
