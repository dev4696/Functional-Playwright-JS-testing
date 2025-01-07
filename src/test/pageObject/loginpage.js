class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameField = '#user-name'; // Selector for username field
      this.passwordField = '#password'; // Selector for password field
      this.submitButton = '#login-button'; // Selector for login button
    }
  
    // Navigate to the login page
    async navigate() {
      try {
        await this.page.goto('https://www.saucedemo.com/', { waitUntil: 'domcontentloaded', timeout: 30000 });
        await this.page.waitForLoadState('load');  // Ensure the page has fully loaded
        await this.page.waitForSelector(this.usernameField, { timeout: 15000 });
      } catch (error) {
        console.error('Error navigating to the login page:', error);
        throw error;
      }
    }
  
    // Enter username in the username field
    async enterUsername(username) {
      await this.page.fill(this.usernameField, username);
    }
  
    // Enter password in the password field
    async enterPassword(password) {
      await this.page.fill(this.passwordField, password);
    }
  
    // Click the submit button to log in
    async clickSubmit() {
      try {
       await this.page.waitForSelector(this.submitButton, { state: 'visible', timeout: 20000 });
       await this.page.click(this.submitButton, { force: true, timeout: 20000 });

      } catch (error) {
        console.error('Error clicking the submit button:', error);
        throw error;
      }
    }
  }
  
  module.exports = LoginPage;
  