const { expect } = require('@playwright/test');

class BBGSearchPage {
    constructor(page) {
        this.page = page;
        this.titleField = "//input[@id='advsearch-title']";
        this.minYearField = "//input[@id='advsearch-yearpublished-min']";
        this.maxYearField = "//input[@id='advsearch-yearpublished-max']";
        this.minTimeDropdown = "//select[@id='advsearch-min-playing-time']";
        this.maxTimeDropdown = "//select[@id='advsearch-max-playing-time']";
        this.submitButton = "//input[@type='submit']";
        this.resultSelector = "//a[@class='primary']";
    }

    async navigate() {
        await this.page.goto('https://boardgamegeek.com/advsearch/boardgame', { waitUntil: 'domcontentloaded' });
    }

    async enterTitle(title) {
        await this.page.fill(this.titleField, title);
    }

    async enterMinYear(year) {
        await this.page.fill(this.minYearField, year);
    }

    async enterMaxYear(year) {
        await this.page.fill(this.maxYearField, year);
    }

    async selectMinPlayingTime(time) {
        await this.page.selectOption(this.minTimeDropdown, { label: time });
    }

    async selectMaxPlayingTime(time) {
        await this.page.waitForSelector(this.maxTimeDropdown, { timeout: 7000 });
        await this.page.selectOption(this.maxTimeDropdown, { label: time });
    }

    async clickSubmit() {
        await this.page.click(this.submitButton);
        await this.page.waitForLoadState('domcontentloaded');
    }

    async getDisplayedGameLinkText() {
        await this.page.waitForSelector(this.resultSelector, { state: "visible", timeout: 10000 });
        const text = await this.page.textContent(this.resultSelector);
        return text.trim();
    }
}

module.exports = BBGSearchPage;
