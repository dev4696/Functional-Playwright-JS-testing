const { expect } = require('@playwright/test');

class CupcakeIpsumPage {
    constructor(page) {
        this.page = page;
        this.header = "//h1[@id='logo']";
        this.paragraphsInput = "//input[@id='number_of_paragraphs']";
        this.shortRadioButton = "input[value='short']";
        this.startWithCheckbox = "//input[@name='startsWithCupcakeIpsum']";
        this.generateButton = "//button[@id='generate_button']";
        this.generatedText = "//div[@class='result-body']";
        this.copyToClipboardButton = "//button[@id='copy_button']";
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async getHeaderText() {
        return await this.page.locator(this.header).textContent();
    }

    async getParagraphsInputValue() {
        return await this.page.locator(this.paragraphsInput).inputValue();
    }

    async selectShortText() {
        await this.page.locator(this.shortRadioButton).check();
    }

    async checkStartWithCupcake() {
        const checkbox = this.page.locator(this.startWithCheckbox);
        if (!(await checkbox.isChecked())) {
            await checkbox.check();
        }
    }

    async countGeneratedTextOccurrences(text) {
        const elements = await this.page.locator(this.generatedText).allTextContents();
        return elements.join(" ").split(text).length - 1;
    }

    async isCopyButtonVisible() {
        return await this.page.locator(this.copyToClipboardButton).count() > 0;
    }

    async clickGenerate() {
        await this.page.locator(this.generateButton).click();
    }
}

module.exports = CupcakeIpsumPage;
