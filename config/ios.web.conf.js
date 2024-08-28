const config = require('./wdio.conf.js').config;

config.capabilities = [{
    platformName: 'iOS',
    browserName: 'safari',
    maxInstances: 1,
    "appium:automationName": 'XCUITest',
    "appium:deviceName": ' iPhone Simulator',
    "appium:platformVersion": '15.0'
}]

exports.config = config;