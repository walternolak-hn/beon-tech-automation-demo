const { $ } = require('@wdio/globals')
const Page = require('./page');

class GooglePage extends Page {
    
    // Page selectors
    get inputSearch () {
        return $('textarea.gLFyf');
    }
    get searchResult () {
        return $('span=WebdriverIO');
    }

    async searchForTerm (searchTerm) {
        await this.inputSearch.waitForDisplayed();
        await this.inputSearch.setValue(searchTerm);
        await driver.keys('Enter');
    }

    open () {
        return super.open('/');
    }
}

module.exports = new GooglePage();
