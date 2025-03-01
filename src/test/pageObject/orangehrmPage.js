const { expect } = require('@playwright/test');

class OrangeHRMPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = "//input[@name='username']";
        this.passwordInput = "//input[@name='password']";
        this.loginButton = "//button[@type='submit']";
        this.dashboardHeader = "//span[@class='oxd-topbar-header-breadcrumb']";
        this.adminButton = "//span[text()='Admin']/ancestor::a";
        this.recordsFoundText = "//div[@class='orangehrm-container']";
        this.profileIcon = "//span[@class='oxd-userdropdown-tab']"; 
        this.logoutOption = "//a[text()='Logout']";
        this.menuOptions = "//ul[@class='oxd-dropdown-menu']//a";
    }

    async navigate(url) {
        await this.page.goto(url, { timeout: 30000, waitUntil: 'domcontentloaded' });
        await this.page.waitForSelector("//input[@name='username']", { timeout: 30000 });
    }
    
    

    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }

    async isDashboardVisible() {
        await this.page.waitForSelector(this.dashboardHeader);
        return await this.page.locator(this.dashboardHeader).isVisible();
    }

    async clickAdminButton() {
        await this.page.click(this.adminButton);
    }

    async getRecordsFoundText() {
        return await this.page.locator(this.recordsFoundText).textContent();
    }

    async clickProfileIcon() {
        await this.page.click(this.profileIcon);
    }

    async getProfileMenuOptions() {
        return await this.page.locator(this.menuOptions).allTextContents();
    }

    async clickLogout() {
        await this.page.click(this.logoutOption);
    }

    async isLoginPageVisible() {
        return await this.page.locator(this.loginButton).isVisible();
    }
}

module.exports = OrangeHRMPage;
