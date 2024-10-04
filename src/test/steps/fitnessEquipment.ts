
import { Given, When, Then, After, setDefaultTimeout } from '@cucumber/cucumber';
import { Page, Browser, chromium, expect } from '@playwright/test';
import { FitnessEquipmentPage } from '../../pages/fitnessEquipmentPage';

setDefaultTimeout(60 * 1000 * 2); // Set default timeout to 2 minutes

let browser: Browser;
let page: Page;
let fitnessPage: FitnessEquipmentPage;

Given('User navigates to the demo application', async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    fitnessPage = new FitnessEquipmentPage(page);
    await fitnessPage.navigate();
});

When('User clicks on the gears option', async function () {
    await fitnessPage.clickGears();
});

When('User clicks on the fitness equipment option', async function () {
    await fitnessPage.clickFitnessEquipment();
});

When('User selects the {string} option from the dropdown', async function (optionText: string) {
    await fitnessPage.sortBy(optionText);
});

After(async function () {
    if (browser) {
      await browser.close();
    }
  });