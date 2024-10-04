import { Page } from '@playwright/test';
import { MensTopLocators } from '../locators/mensTopLocators';

export class MensTopPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto("https://magento.softwaretestingboard.com/");
  }

    async selectMenTops(){
        await this.page.locator(MensTopLocators.mensPage).click();
    }

    async selectTops(){
        await this.page.locator(MensTopLocators.topsLink).click();
    }

    async selectProduct() {
        await this.page.locator(MensTopLocators.selectProduct).click();
    }

    async changeProductColor(colorName: any) {
        await this.page.locator(MensTopLocators.selectColor).click();
    }

    
}