var testscript = 'google_search';

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();


driver.get('http://www.google.com/ncr')
    .then(_ => driver.findElement(By.name('q')).sendKeys('webdriver'))
    .then(_ => driver.findElement(By.name('btnG')).click())
    .then(_ => driver.wait(until.titleIs('webdriver - Google Search'), 1000, testscript + ': check browser title.'))
    .then(_ => driver.quit());