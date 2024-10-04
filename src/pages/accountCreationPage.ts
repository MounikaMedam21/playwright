import { Page } from '@playwright/test';
import { CreateAccountPageLocators } from '../locators/createAccountPageLocators';  

export class CreateAccountPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto("https://magento.softwaretestingboard.com/");
  }

  async clickCreateAccountLink() {
    await this.page.locator(CreateAccountPageLocators.createAccountLink).click();
  }

  async fillFirstName(firstName: string) {
    await this.page.locator(CreateAccountPageLocators.firstNameInput).fill(firstName);
  }

  async fillLastName(lastName: string) {
    await this.page.locator(CreateAccountPageLocators.lastNameInput).fill(lastName);
  }

  async fillEmail(email: string) {
    await this.page.locator(CreateAccountPageLocators.emailInput).fill(email);
  }

  async fillPassword(password: string) {
    await this.page.locator(CreateAccountPageLocators.passwordInput).fill(password);
  }

  async fillConfirmPassword(confirmPassword: string) {
    await this.page.locator(CreateAccountPageLocators.confirmPasswordInput).fill(confirmPassword);
  }

  async clickCreateAccountButton() {
    await this.page.locator(CreateAccountPageLocators.createAccountButton).click();
  }
}