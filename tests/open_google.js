module.exports = {
  'Demo open and search at Google' : function (browser) {

    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      .waitForElementVisible('div[id=main]', 5000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};