const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const CupcakeIpsumPage = require('../pageObject/cupcakePage');

let cupcakeIpsumPage;

Given('I navigate to the Cupcake Ipsum website {string}', async function (url) {
    cupcakeIpsumPage = new CupcakeIpsumPage(this.page);
    await cupcakeIpsumPage.navigate(url);
});

When('I see {string}', async function (expectedHeader) {
    const actualHeader = await cupcakeIpsumPage.getHeaderText();
    expect(actualHeader).toContain(expectedHeader);
});

Then('I see Paragraphs has {string} filled in', async function (expectedValue) {
    const actualValue = await cupcakeIpsumPage.getParagraphsInputValue();
    expect(actualValue).toBe(expectedValue);
});

When('I select "Short" radio button', async function () {
    await cupcakeIpsumPage.selectShortText();
});

Then('I check Start with Cupcake ipsum dolor sit amet', async function () {
    await cupcakeIpsumPage.checkStartWithCupcake();
});

Then('I see {int} instance of Cupcake ipsum dolor sit amet on the page', async function (int) {
    const occurrences = await cupcakeIpsumPage.countGeneratedTextOccurrences("Cupcake ipsum dolor sit amet");

});

Then('I do not see a "Copy to Clipboard" button', async function () {
    const isButtonVisible = await cupcakeIpsumPage.isCopyButtonVisible();
    expect(isButtonVisible).toBeFalsy();
});

When('I click Generate', async function () {
    await cupcakeIpsumPage.clickGenerate();
});

Then('I see {int} instances of Cupcake ipsum dolor sit amet on the page', async function (int) {
    const occurrences = await cupcakeIpsumPage.countGeneratedTextOccurrences("Cupcake ipsum dolor sit amet");

});
