module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    require: ["features/**/*.ts"],
    paths: ["features/**/*.feature"],
    retry: process.env.CI ? 3 : undefined,
    formatOptions: {
      snippetInterface: "async-await",
    },
    format: ["@cucumber/pretty-formatter", "./allure-reporter.js"],
  },
};
