import { Page, expect } from '@playwright/test';
import {LoginPageLocators } from '../locators/loginPageLocators';  


export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://magento.softwaretestingboard.com/');
  }

  async clickSignInLink() {
    await this.page.locator(LoginPageLocators.sigInLink).click();
  }

  async enterEmail(email: string) {
    await this.page.locator(LoginPageLocators.emailInput).fill(email); 
  }

  async enterPassword(password: string) {
    await this.page.locator(LoginPageLocators.passwordInput).fill(password);
  }

  async clickSignInButton() {
    await this.page.locator(LoginPageLocators.loginButton).click();
  }

  async errorMessage(expectedMessage: string) {
    await this.page.locator(LoginPageLocators.errorMessageForInvalidEmail).isVisible();
  }
  


}