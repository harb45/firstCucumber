const { Given, When, Then } = require("@cucumber/cucumber");
const { chromium } = require('playwright');
const { expect } = require('@playwright/test');
 
 
  Given('I am on the ecommerce website', async function () {
    browser = await chromium.launch({ headless: false, sloMo: 2000 });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://www.amazon.fr/');
    await page.locator('button#sp-cc-rejectall-link').click();
    this.page = page;
  });
 
 
 
  When('I search for a {string}', async function (search) {
    await this.page.getByPlaceholder('Rechercher Amazon.fr').fill(search);
    await this.page.getByPlaceholder('Rechercher Amazon.fr').press('Enter');
  });
 
 
 
  Then('I should see the search results', async function () {
    await this.page.locator('.rush-component > .a-link-normal').first().click();
    // await browser.close();
  });


  Given('I am on the article page', async function () {
    // browser = await chromium.launch({ headless: false });
    // context = await browser.newContext();
    this.page = page
  });

  When('I click on add to card', async function () {
    await this.page.locator('#add-to-cart-button').click();
  });

  Then('I should see a new article in my card', async function () {
    await this.page.locator('span#nav-cart-count').getByText('1');
    // await browser.close();
  });


  Given('I added the article to my card', async function () {
    // browser = await chromium.launch({ headless: false });
    // context = await browser.newContext();
    this.page = page
  });

  When('I click on the card', async function () {
    await this.page.locator('a#nav-cart').click();
    let quantityButton = this.page.locator('[data-a-class="quantity"]');
    quantityButton.click();
    // await delay(1000);
    // await this.page.locator('a#quantity_2').click();
    let quantity = this.page.locator('#quantity_5');
    quantity.click();
    // await this.page.locator('li[aria-labelledby="quantity_10"]').click();
    // await this.page.locator('.a-input-text a-width-small a-spacing-small sc-quantity-textfield sc-update-quantity-input sc-hidden').fill('10');
    // await this.page.locator('a#a-autoid-2-announce').click();
  });

  Then('I can increase the quantity the article', async function () {
    // await this.page.locator('.a-size-base').getByText('a été supprimé de Votre panier.');
    await expect(this.page.locator('span#sc-subtotal-label-activecart')).toContainText('5 articles');
  });

  
  Given('I am in the card page', async function () {
    this.page = page
  });

  When('I click on delete buton', async function () {
    await this.page.getByLabel('Supprimer WUAYAMI Chaussures').click();
  });

  Then('I erase the article', async function () {
    await this.page.locator('.a-size-base').getByText('a été supprimé de Votre panier.');
    await browser.close();
  });