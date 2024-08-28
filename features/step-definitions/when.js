const { When } = require('@wdio/cucumber-framework');

const GooglePage = require('../pageobjects/google.page');

// Search for a term
When(/^I search for (\w+)$/, async (searchTerm) => {
    await GooglePage.searchForTerm(searchTerm)
    await driver.pause(1000)
});

// open the search result page
When(/^I enter the WebdriverIO search result$/, async () => {
    await GooglePage.searchResult.click()
    await driver.pause(1000)
});