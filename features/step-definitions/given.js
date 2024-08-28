const { Given } = require('@wdio/cucumber-framework');

const GooglePage = require('../pageobjects/google.page');

const pages = {
    google: GooglePage,
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});