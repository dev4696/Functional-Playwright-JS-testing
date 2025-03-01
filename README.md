# Playwright and Cucumber.js Automation Tests

This repository contains automated test scripts for functional testing using Playwright and Cucumber.js. The tests cover the following features:

- **BggSearch.feature** - Tests related to BoardGameGeek search functionality.
- **CupCake.feature** - Tests for the Cupcake Ipsum text generator.
- **OrangeHrm.feature** - Automation tests for login and admin navigation in OrangeHRM.
- **TravelSignup.feature** - Functional tests for travel signup forms.

## Prerequisites
Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Playwright](https://playwright.dev/)
- [Cucumber.js](https://github.com/cucumber/cucumber-js)
- [Mocha](https://mochajs.org/) (for test reporting)

## Setup Instructions
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-name>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Install Playwright browsers:
   ```sh
   npx playwright install
   ```

## Running Tests
### Functional Testing
To execute functional tests with Cucumber.js, use the following command:
```sh
npx cucumber-js --tags "@functional"
```
To run specific feature files:
```sh
npx cucumber-js src/test/feature/OrangeHrm.feature
```

### Running Tests with Mocha and Generating Reports
1. Run tests using Mocha with the `mochawesome` reporter:
   ```sh
   npx mocha "src/test/**/*.js" --reporter mochawesome
   ```
2. The test results will be saved in the `mochawesome-report` directory.

### Generating and Viewing Cucumber Reports
1. Run the Cucumber tests to generate a JSON report:
   ```sh
   npx cucumber-js --format json:reports/cucumber-report.json
   ```
2. Generate an HTML report using the `generateReport.js` script:
   ```sh
   node generateReport.js
   ```
3. Open the generated report in a browser:
   ```sh
   start reports/cucumber-report.html
   ```

### Placement of `generateReport.js`
The `generateReport.js` file should be placed in the root directory of the project (same level as `package.json`).

**Project Structure:**
```
E:\globallogic\GL\
│── src/
│   ├── test/
│   │   ├── feature/
│   │   ├── steps/
│   │   ├── support/
│── reports/          <- Cucumber report output
│── node_modules/
│── package.json
│── cucumber.js       <- Cucumber config file
│── generateReport.js  <- Place this file here
```

## Troubleshooting
- If Playwright cannot launch the browser, try:
  ```sh
  npx playwright install --with-deps
  ```
- If Cucumber step definitions are missing, ensure all step files are correctly linked to feature files.
- Increase the timeout for Playwright actions if needed:
  ```js
  setDefaultTimeout(10000);
  ```

## Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add new test"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License.

