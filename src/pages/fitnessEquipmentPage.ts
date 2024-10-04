import { Page } from '@playwright/test';
import { FitnessEquipmentLocators } from '../locators/fitnessEquipmentLocators';

export class FitnessEquipmentPage {
  constructor(private page: Page) {}

  // Navigate to the base URL
  async navigate() {
    await this.page.goto("https://magento.softwaretestingboard.com/");
  }

  // Click on the "Gears" option
  async clickGears() {
    await this.page.locator(FitnessEquipmentLocators.gearsPage).click();
  }

  // Click on the "Fitness Equipment" option
  async clickFitnessEquipment() {
    await this.page.waitForSelector(FitnessEquipmentLocators.fit_equip);
    await this.page.locator(FitnessEquipmentLocators.fit_equip).click();
  }

  // Sort the products by the given optionasync sortBy(optionValue: string) {     
    async sortBy(optionValue: string) {     
        await this.page.waitForSelector(FitnessEquipmentLocators.sort_dropdown);     
        await this.page.locator(FitnessEquipmentLocators.sort_dropdown).click();   
        await this.page.selectOption('select#sorter', { value: optionValue });
    }
}