
import { Given, When, Then, After, setDefaultTimeout } from '@cucumber/cucumber';
import { Page, Browser, chromium, expect } from '@playwright/test';
import { LoginPage } from '../../pages/signinPage';

setDefaultTimeout(60*1000*2);

let browser: Browser;
let page: Page;
let loginPage: LoginPage;

Given('User navigates to the test automation application', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  await loginPage.navigate();
});

Given('User clicks on the signin link', async function () {
  await loginPage.clickSignInLink();
});

Given('User enter the email for the email field as {string}', async function (email: string) {
  await loginPage.enterEmail(email);
});

Given('User enter the password for the password filed as {string}', async function (password: string) {
  await loginPage.enterPassword(password);
});

When('User click on the signin button', async function () {
  await loginPage.clickSignInButton();
});
Then('Login should be success', async function () {
  await expect(page).toHaveURL('https://magento.softwaretestingboard.com/', { timeout: 60000 }); 
});


Given('User enter the incorrect email as {string}', async function (email: string) {
  await loginPage.enterEmail(email);
});

Given('User enter the correct password as {string}', async function (password: string) {
    await loginPage.enterPassword(password);
  });
  
  Given('User enter the correct email as {string}', async function (email: string) {
    await loginPage.enterEmail(email);
  });
Given('User enter the incorrect password as {string}', async function (password: string) {
  await loginPage.enterPassword(password);
});

When('User click on the submit button', async function () {
  await loginPage.clickSignInButton();
});

Then('Login should fail user should get error message for emai fail', async function () {
    await loginPage.errorMessage('Please enter a valid email address (Ex: johndoe@domain.com).');
  });
  
  Then('Login should fail user should get error message', async function () {
    await loginPage.errorMessage('The account sign-in was incorrect');
  });
  
  Then('Login should fail user should get the error message for invalid details', async function () {
    await loginPage.errorMessage('The account sign-in was incorrect.');
  });

  After(async function () {
    if (browser) {
      await browser.close();
    }
  });

  