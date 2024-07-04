import {
  IWorldOptions,
  World as CucumberWorld,
  IWorld as ICucumberWorld,
} from "@cucumber/cucumber";
import { BrowserContext, Page } from "@playwright/test";

export interface CustomWorld extends ICucumberWorld {
  context: BrowserContext;
  page: Page;
  startTime: Date;
}

export class World extends CucumberWorld implements CustomWorld {
  context!: BrowserContext;
  page!: Page;
  startTime!: Date;

  constructor(options: IWorldOptions) {
    super(options);
  }
}
