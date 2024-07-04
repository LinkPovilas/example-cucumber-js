import {
  Before,
  After,
  BeforeAll,
  AfterAll,
  setWorldConstructor,
  setDefaultTimeout,
  ITestCaseHookParameter,
  Status,
} from "@cucumber/cucumber";
import {
  Browser,
  chromium,
  firefox,
  selectors,
  webkit,
} from "@playwright/test";
import { CustomWorld, World } from "./world";
import { config } from "./config";
import { saveTrace, startTracing, stopTracing } from "./utils/trace";

let browser: Browser;
const failedScenarios: { [key: string]: string } = {};
const DISABLE_TIMEOUT = -1;

setDefaultTimeout(
  process.env.DEBUG ? DISABLE_TIMEOUT : config.cucumberStepTimeout
);
setWorldConstructor(World);
selectors.setTestIdAttribute("data-test");

BeforeAll(async () => {
  switch (config.browser) {
    case "firefox":
      browser = await firefox.launch(config.launchOptions);
      break;
    case "webkit":
      browser = await webkit.launch(config.launchOptions);
      break;
    default:
      browser = await chromium.launch(config.launchOptions);
  }
});

Before(async function (this: CustomWorld, scenario: ITestCaseHookParameter) {
  this.startTime = new Date();
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
  this.page.setDefaultTimeout(config.actionTimeout);

  if (scenario.pickle.name in failedScenarios) {
    await startTracing(this.context);
  }
});

After(async function (this: CustomWorld, scenario: ITestCaseHookParameter) {
  const hasPassed = scenario.result?.status === Status.PASSED ? true : false;
  const isRetriedScenario = scenario.pickle.name in failedScenarios;

  if (hasPassed && isRetriedScenario) {
    await stopTracing(this.context);
    delete failedScenarios[scenario.pickle.name];
  }

  if (!hasPassed) {
    if (isRetriedScenario) {
      await saveTrace(this.context, scenario, this.startTime);
      delete failedScenarios[scenario.pickle.name];
    } else {
      failedScenarios[scenario.pickle.name] = "";
    }
    const image = await this.page.screenshot();
    await Promise.resolve(this.attach(image, "image/png"));
  }

  await this.page?.close();
  await this.context?.close();
});

AfterAll(async () => {
  await browser.close();
});
