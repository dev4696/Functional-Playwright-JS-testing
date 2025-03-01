const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const SignupPage = require('../pageObject/travelsignuppage.js');

let signupPage;

Given('I navigate to signup site', async function () {
    signupPage = new SignupPage(this.page);
    await signupPage.navigate();
});

Then('I see a complete signup form at the bottom of the page', async function () {
    await signupPage.verifyFormExists();
});

Then('I select {string} from the {string} radio selection', async function (value, _field) {
    await signupPage.selectTitle(value);
});

Then('I fill in the {string} field with {string}', async function (field, value) {
    await signupPage.fillField(field, value);
});

Then('I select {string} from the {string} dropdown', async function (value, _field) {
    await signupPage.selectCountry(value);
});

Then('I check off {string}', async function (_checkbox) {
    await signupPage.checkTerms();
});

When('I click {string}', async function (_button) {
    await signupPage.clickSignUp();
});

Then('I am redirected to {string} with a {int} error', async function (expectedUrl, expectedStatus) {
    await signupPage.verifyRedirection(expectedUrl, expectedStatus);
});
