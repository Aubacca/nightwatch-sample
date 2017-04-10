module.exports = {
  before : function(browser) {
    console.log('Setting up...');
  },

  after : function(browser) {
    console.log('Closing down...');
  },

  beforeEach : function(browser) {
    console.log('Setting up each ...');
  },

  afterEach : function() {
    console.log('Closing down each ...');
  },
  'step one' : function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 1000)
  },

  'step two' : function (browser) {
    browser
      .click('button[name=btnG]')
      .waitForElementVisible('#main', 1000)
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};
