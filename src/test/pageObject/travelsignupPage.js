const { expect } = require('@playwright/test');

class SignupPage {
    constructor(page) {
        this.page = page;
        this.titleRadio = (value) => `input[name="title"][value="${value}"]`;
        this.displaysignup="//form[@action='/signup']"
        this.firstName = "(//input[@type='text'])[6]";
        this.lastName = "(//input[@type='text'])[7]";
        this.email = "(//input[@type='email'])[3]";
        this.phoneNumber = "//input[@type='tel']";
        this.password = "(//input[@type='password'])[3]";
        this.confirmPassword = "(//input[@type='password'])[4]";
        this.countryDropdown = "(//select)[3]";
        this.termsCheckbox = "(//input[@type='checkbox'])[5]";
        this.signUpButton = "//button[contains(text(),'Sign up')]";
    }

    async navigate() {
        await this.page.goto('https://marksheet.io/html-forms.html');
    }

    async verifyFormExists() {
        const formLocator = this.page.locator(this.displaysignup);
        await formLocator.scrollIntoViewIfNeeded();
        await expect(formLocator).toBeVisible();
    }
    

    async selectTitle(title) {
        await this.page.locator(this.titleRadio(title)).click();
    }

    async fillField(field, value) {
        const fieldSelectors = {
            "First name": this.firstName,
            "Last name": this.lastName,
            "Email": this.email,
            "Phone number": this.phoneNumber,
            "Password": this.password,
            "Confirm your password": this.confirmPassword
        };
        await this.page.fill(fieldSelectors[field], value);
    }

    async selectCountry(country) {
        await this.page.selectOption(this.countryDropdown, { label: country });
    }

    async checkTerms() {
        await this.page.check(this.termsCheckbox);
    }

    async clickSignUp() {
        await this.page.click(this.signUpButton);
    }

    async verifyRedirection(expectedUrl, expectedStatusCode) {
        await this.page.waitForURL(expectedUrl);
        const response = await this.page.goto(expectedUrl);
    }
}

module.exports = SignupPage;
