import { Given, When, Then, setDefaultTimeout, After } from '@cucumber/cucumber';
import { Page, Browser, chromium, expect } from '@playwright/test';
import { MensTopPage } from '../../pages/mensTopPage'; 
setDefaultTimeout(60*1000*2);

let browser: Browser;
let page: Page;
let mensTopPage: MensTopPage;

Given('User navigate to the automation application', async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    mensTopPage = new MensTopPage(page);
    await mensTopPage.navigate();
});

When('User selects the "Men\'s Top" section', async function () {
    await mensTopPage.selectMenTops();
});
 
When('User selects the "Tops" option', async function () {
    await mensTopPage.selectTops();
    
});

When('User selects the any one product from the list', async function () {
    await mensTopPage.selectProduct();
});

When('User changes the color of the product to {string}', async function (colorName: string) {
    await mensTopPage.changeProductColor(colorName);
});

After(async function () {
    if (browser) {
      await browser.close();
    }
  });