const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

Before(async function () {
    console.log("🔵 Opening Browser...");
    this.browser = await chromium.launch({ headless: false }); // Use true for faster execution
    this.page = await this.browser.newPage();
});

After(async function () {
    console.log("🟠 Running After Hook...");
    if (this.page) {
        console.log("🔴 Closing Page...");
        await this.page.close();
        this.page = null;
    }
    if (this.browser) {
        console.log("🔴 Closing Browser...");
        await this.browser.close();
        this.browser = null;
    }
});
