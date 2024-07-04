import { Page, expect } from "@playwright/test";

export const goToLandingPage = async (page: Page) => {
  await page.goto("https://www.saucedemo.com");
};

export const verifyUrl = async (page: Page, urlOrRegExp: string | RegExp) => {
  await expect(page).toHaveURL(urlOrRegExp);
};
