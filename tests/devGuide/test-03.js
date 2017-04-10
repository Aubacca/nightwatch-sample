this.demoSearchTrivadis = function (browser) {
  browser
    .url(browser.launch_url)
    .waitForElementVisible('body', 5000)
    .useXpath() // every selector now must be xpath
//    .click("//tr[@data-recordid]/span[text()='Search Text']")
    .useCss() // we're back to CSS now
    .setValue('input[type=text]', 'trivadis')
    .click('button[name=btnG]')
    .pause(1000)
    .assert.containsText('#main', 'trivadis')
    .verify.containsText('#main', 'trivadis')
    .pause(2000)
    .end();
};
