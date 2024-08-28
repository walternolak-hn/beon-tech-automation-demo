const { $ } = require('@wdio/globals')

class WebdriverioPage {
    
    // Page selectors
    get titleWebdriverIO () {
        return $('p.hero__subtitle');
    }
}

module.exports = new WebdriverioPage();
