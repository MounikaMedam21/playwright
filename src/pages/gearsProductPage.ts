import { Page } from '@playwright/test';
import { GearsPageLocators } from '../locators/gearsPageLocators';

export class GearsPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto("https://magento.softwaretestingboard.com/");
  }

  async selectGears() {
    await this.page.locator(GearsPageLocators.gearsOption).click();
  }

  async selectProduct() {
    await this.page.locator(GearsPageLocators.gearsProduct).click();
  }

  async selectCustomizeAndAddToCart() {
    const element = this.page.locator(GearsPageLocators.customizeAndAddToCart);
      await element.scrollIntoViewIfNeeded();
      await this.page.waitForTimeout(5000); 
      await element.click();
  }

  async selectBallSize(ballSize: string) {
    await this.page.locator(GearsPageLocators.ballSize).click();
  }
  
  async selectStrapFootSize(strapSize: string) {
    const element = this.page.locator(GearsPageLocators.strapSize);
    await element.waitFor({ state: 'visible', timeout: 60000 });
    await element.scrollIntoViewIfNeeded();
    await element.click();
  }

  async addProductToCart() {
    await this.page.locator(GearsPageLocators.addToCart).click();
  }

  async selectMyCart() {
    const my_cart = this.page.locator(GearsPageLocators.myCart);
    await my_cart.waitFor({ state: 'visible', timeout:60000 });
    await my_cart.click();
  }

  async selectViewCart() {
    await this.page.locator(GearsPageLocators.viewCart).click();
  }

  async getSelectedPrice() {
    try {
      const priceElement = this.page.locator(GearsPageLocators.productPrice);
      
      // Wait for the price element to be visible
      await priceElement.waitFor({ state: 'visible', timeout: 60000 });

      // Get the inner text of the price element
      const priceText = await priceElement.innerText();

      // Return the trimmed price text
      return priceText.trim();
    } catch (error) {
      console.error('Error retrieving selected price:', error);
      return null; // Return null if there is an error
    }
  }
  
}