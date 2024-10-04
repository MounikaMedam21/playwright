import { Given, When, Then, After, setDefaultTimeout} from '@cucumber/cucumber';
import { Page, Browser, chromium, expect } from '@playwright/test';
import { CreateAccountPage } from '../../pages/accountCreationPage';

setDefaultTimeout(60*1000*2);
let browser: Browser;
let page: Page;
let createAccountPage: CreateAccountPage;


Given('User navigates to the application', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  createAccountPage = new CreateAccountPage(page);
  await createAccountPage.navigate();
});

Given('User clicks on the create an account link', async function () {
  await createAccountPage.clickCreateAccountLink();
});

Given('User enters the first name as {string}', async function (firstName: string) {
  await createAccountPage.fillFirstName(firstName);
});

Given('User enters the last name as {string}', async function (lastName: string) {
  await createAccountPage.fillLastName(lastName);
});

Given('User enters the email as {string}', async function (email: string) {
  await createAccountPage.fillEmail(email);
});

Given('User enters the password as {string}', async function (password: string) {
  await createAccountPage.fillPassword(password);
});

Given('User enters the confirm password as {string}', async function (confirmPassword: string) {
  await createAccountPage.fillConfirmPassword(confirmPassword);
});

When('User clicks on the create an account button', async function () {
  await createAccountPage.clickCreateAccountButton();
});

Then('User should redirect to the account page', async function () {
  // Wait for the URL to match the account page URL
  await page.waitForURL('https://magento.softwaretestingboard.com/customer/account/', { timeout: 60000 });
  
  // Optionally, add assertions to verify successful redirection
  await expect(page.url()).toBe('https://magento.softwaretestingboard.com/customer/account/');
});


After(async function () {
    if (browser) {
      await browser.close();
    }
  });