const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { expect } = require('@playwright/test');
const BBGSearchPage = require('../pageObject/bbgsearchpage'); // Ensure the file path is correct

let page;
let browser;
let bggSearchPage;

Given('I navigate to BGG site', { timeout: 30000 }, async function () {
  browser = await chromium.launch({ headless: false, slowMo: 500 }); // Set headless to false for debugging
  page = await browser.newPage();
  bggSearchPage = new BBGSearchPage(page);
  await bggSearchPage.navigate();
});


When('I fill in the Title field with {string}', async function (title) {
    await bggSearchPage.enterTitle(title);
});

When('I fill in the Year Published Minimum field with {string}', async function (year) {
    await bggSearchPage.enterMinYear(year);
});

When('I fill in the Year Published Maximum field with {string}', async function (year) {
    await bggSearchPage.enterMaxYear(year);
});

When('I select {string} from the Min Playing Time drop down', async function (time) {
    await bggSearchPage.selectMinPlayingTime(time);
});

When('I select {string} from the Max Playing Time drop down', async function (time) {
    await bggSearchPage.selectMaxPlayingTime(time);
});

When('Clicking Submit takes me to a new page', async function () {
    await bggSearchPage.clickSubmit();
});

Then('I see and Print the name of the link displayed', { timeout: 30000 }, async function () {
  const linkText = await bggSearchPage.getDisplayedGameLinkText();
  console.log("🔗 Found Link Text: ", linkText);
  // await this.page.close();
  // await this.browser.close();
});