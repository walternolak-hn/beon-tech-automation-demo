const config = require('./wdio.conf.js').config;

config.capabilities = [{
    platformName: 'Android',
    browserName: 'chrome',
    maxInstances: 1,
    "appium:automationName": 'uiautomator2',
    "appium:deviceName": 'Pixel 5',
    "appium:platformVersion": '15',
}]

exports.config = config;