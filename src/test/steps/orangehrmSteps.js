const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const OrangeHRMPage = require('../pageObject/orangehrmPage');

let orangeHRMPage;

Given('I navigate to OrangeHRM {string}', async function (url) {
    orangeHRMPage = new OrangeHRMPage(this.page);
    console.log("Navigating to:", url); 
    await this.page.waitForTimeout(2000);
    await orangeHRMPage.navigate(url);
    await this.page.waitForSelector(orangeHRMPage.loginButton, { timeout: 30000 });
});



When('I login with credentials {string} and {string}', async function (username, password) {
    await orangeHRMPage.login(username, password);
    await this.page.waitForSelector(orangeHRMPage.dashboardHeader, { timeout: 10000 });
});

Then('I am directed to Dashboard', async function () {
    const isDashboardVisible = await orangeHRMPage.isDashboardVisible();
    expect(isDashboardVisible).toBeTruthy();
});

When('I click on Admin button on Left', async function () {
    await orangeHRMPage.clickAdminButton();
    await this.page.waitForSelector(orangeHRMPage.recordsFoundText, { timeout: 5000 });
});

Then('I see Records Found on page', async function () {
    const actualText = await orangeHRMPage.getRecordsFoundText();
    expect(actualText).toContain('Records Found');
});

Then('Print the result displayed for Records Found.', async function () {
    const actualText = await orangeHRMPage.getRecordsFoundText();
    console.log(`Displayed text: ${actualText}`);
});

When('I click on the Profile displayed on Right top corner of Screen', async function () {
    await orangeHRMPage.clickProfileIcon();
    await this.page.waitForSelector(orangeHRMPage.menuOptions, { timeout: 5000 });
});

Then('I see About, Support, Change Password, Logout options.', async function () {
    const menuOptions = await orangeHRMPage.getProfileMenuOptions();
    expect(menuOptions).toEqual(['About', 'Support', 'Change Password', 'Logout']);
});

When('I click on Logout.', async function () {
    await orangeHRMPage.clickLogout();
    await this.page.waitForSelector(orangeHRMPage.loginButton, { timeout: 5000 });
});

Then('I am logged out and directed to the login Page.', async function () {
    const isLoginVisible = await orangeHRMPage.isLoginPageVisible();
    expect(isLoginVisible).toBeTruthy();
});
