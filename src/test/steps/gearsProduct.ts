import { Given, When, After, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { Page, Browser, chromium, expect } from '@playwright/test';
import { GearsPage } from '../../pages/gearsProductPage';

setDefaultTimeout(120000);

let browser: Browser;
let page: Page;
let gearsPage: GearsPage;

Given('User navigates to the demo test automation application', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  gearsPage = new GearsPage(page);
  await gearsPage.navigate();
});

When('User selects the gears', async function () {
  await gearsPage.selectGears();
});

When('User selects the product', async function () {
  await gearsPage.selectProduct();
});

When('User selects the Customize and Add to Cart option', async function () {
  await gearsPage.selectCustomizeAndAddToCart();
});

When('User selects the {string} ball radio button', async function (ballSize: string) {
  await gearsPage.selectBallSize(ballSize);
});

When('User selects the {string} radio button', async function (strapSize: string) {
  await gearsPage.selectStrapFootSize(strapSize);
});


When('User clicks on the add to cart', async function () {
  await gearsPage.addProductToCart();
});

When('User clicks on the my cart option', async function () {
  await gearsPage.selectMyCart();
});

When('User clicks on the view to edit cart button', async function () {
  await gearsPage.selectViewCart();
});

Then('verify the selected product price {string}', async function (expectedPrice) {
  const cartPrice = await gearsPage.getSelectedPrice(); // Get actual price
  console.log('Expected Price:', expectedPrice); // Log expected price
  console.log('Received Price:', cartPrice); // Log received price
  expect(cartPrice).toBe(expectedPrice); // Compare prices
});


After(async function () {
  if (browser) {
    await browser.close();
  }
});