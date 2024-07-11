# example-cucumber-js

CucumberJS + Playwright library + @pickle-jar/cli

[@pickle-jar/cli](https://www.npmjs.com/package/@pickle-jar/cli) - experimental CLI tool made by me to run scenarios on multiple machines simultaneously.

## Test report

Allure Report: https://linkpovilas.github.io/example-cucumber-js/

## Running tests

```bash
# Run all of the tests
npm test

# Run tests for specific feature(s) or scenario(s)
# Add tag @only above a feature or a scenario name
npm run test:only
```

## Debugging (Visual Studio Code)

Standard Debugging

- Add breakpoint(s) in your code.
- Open a feature file.
- Add the tag @debug above the scenario.
- Open the Run and Debug tab (CTRL+SHIFT+D).
- Select Debug.

Using Playwright Inspector

- Open a feature file.
- Add the tag @debug above the scenario.
- Open the Run and Debug tab (CTRL+SHIFT+D).
- Select Debug with Inspector.
- Use Playwright Inspector window to step through tests.

Note: You can use Playwright Inspector with breakpoints.

When to Use Each Debugging Method

- Standard Debugging: Use this when there are mistakes in your code.
- Playwright Inspector: Use this when you want to step through tests and inspect the pages.
