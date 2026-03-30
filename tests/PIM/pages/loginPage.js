// loginPage.js - Page Object Model for Login Module
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
    
    // Element locators
    this.usernameTextbox = this.page.getByRole('textbox', { name: 'Username' });
    this.passwordTextbox = this.page.getByRole('textbox', { name: 'Password' });
    this.loginButton = this.page.getByRole('button', { name: 'Login' });
    this.forgetPasswordLink = this.page.locator('text=Forgot your password?');
  }

  async navigateToLoginPage() {
    await this.page.goto(this.loginUrl);
    await this.page.waitForLoadState('networkidle');
  }

  async login(username, password) {
    await this.usernameTextbox.fill(username);
    await this.passwordTextbox.fill(password);
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async loginAsAdmin() {
    await this.login('Admin', 'admin123');
  }

  async isLoginPageDisplayed() {
    return await this.usernameTextbox.isVisible();
  }

  async isLoginSuccessful() {
    return await this.page.waitForURL('**/dashboard/index', { timeout: 5000 }).catch(() => false);
  }
}
