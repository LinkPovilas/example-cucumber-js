import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";
import { goToLandingPage, verifyUrl } from "../../src/page-actions/navigation";
import {
  UserType,
  clickLoginButton,
  enterUsername,
  loginAs,
  verifyLoginError,
} from "../../src/page-actions/authentication";
import { pageUrl } from "../../src/data/page-url";

Given("I navigate to the landing page", async function (this: CustomWorld) {
  await goToLandingPage(this.page);
});

Given(
  "I enter the username {string}",
  async function (this: CustomWorld, string) {
    await enterUsername(this.page, string);
  }
);

When("I click the login button", async function (this: CustomWorld) {
  await clickLoginButton(this.page);
});

Then(
  "I should see an error message saying {string}",
  async function (this: CustomWorld, message: string) {
    await verifyLoginError(this.page, message);
  }
);

When("I login as {string}", async function (userType: UserType) {
  await loginAs(this.page, userType);
});

Then(
  "I should be redirected to the inventory page",
  async function (this: CustomWorld) {
    await verifyUrl(this.page, pageUrl.inventory);
  }
);
