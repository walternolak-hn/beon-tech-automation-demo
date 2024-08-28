const { Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const GooglePage = require('../pageobjects/google.page');
const WebdriverIOPage = require('../pageobjects/webdriverio.page');

// Search for a term
Then(/^I should see (\w+) results$/, async (searchResult) => {
    await expect(GooglePage.searchResult).toBeExisting();
    await expect(GooglePage.searchResult).toHaveText(expect.stringContaining(searchResult));
    await driver.pause(1000)
});

// open the search result page
Then(/^I should see the WebdriverIO page$/, async () => {
    await expect(WebdriverIOPage.titleWebdriverIO).toBeExisting();
    await expect(WebdriverIOPage.titleWebdriverIO).toHaveText(expect.stringContaining('Marco de prueba'));
    await expect(driver).toHaveUrl(expect.stringContaining('webdriver.io'));
    await driver.pause(1000)
});