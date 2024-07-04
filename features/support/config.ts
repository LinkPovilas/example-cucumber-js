import { BrowserContextOptions, LaunchOptions } from "@playwright/test";

type Browser = "chromium" | "firefox" | "webkit";

interface Config {
  browser: Browser;
  launchOptions?: LaunchOptions;
  browserContextOptions?: BrowserContextOptions;
  actionTimeout: number;
  cucumberStepTimeout: number;
}

export const config: Config = {
  browser: (process.env.BROWSER as Browser | undefined) ?? "chromium",
  launchOptions: {
    headless: true,
    slowMo: 0,
    args: [
      "--use-fake-ui-for-media-stream",
      "--use-fake-device-for-media-stream",
    ],
    firefoxUserPrefs: {
      "media.navigator.streams.fake": true,
      "media.navigator.permission.disabled": true,
    },
  },
  browserContextOptions: { baseURL: "https://www.saucedemo.com" },
  actionTimeout: 5_000,
  cucumberStepTimeout: 6_000,
};
