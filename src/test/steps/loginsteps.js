const { Given, When, Then, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright'); // Assuming you're using Playwright
const LoginPage = require('../pageObject/loginpage'); // Import the LoginPage class

let browser, page, loginPage;

Given('I am on the login page', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  await loginPage.navigate();
});

When('I enter the username {string}', async function (username) {
  await loginPage.enterUsername(username);
});

When('I enter the password {string}', async function (password) {
  await loginPage.enterPassword(password);
});

Then('I click the login button', async function () {
  await loginPage.clickSubmit();
});

After(async function () {
  await browser.close();
});
