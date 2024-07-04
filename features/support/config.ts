import { LaunchOptions } from "@playwright/test";

const launchOptions: LaunchOptions = {
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
};

export const config = {
  browser: process.env.BROWSER ?? "chromium",
  launchOptions,
  actionTimeout: 5_000,
  cucumberStepTimeout: 6_000,
};
