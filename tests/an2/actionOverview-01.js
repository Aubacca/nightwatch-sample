module.exports = {
  '@disabled': true,
  'AO-02' : function (browser) {
    baseUrl = 'http://s5xdb.roche.com:50000/irj/portal/fiori#Shell-home';
    waitingTime = 20000;

    browser
      .url(baseUrl)
      .waitForElementVisible('body', waitingTime)
      .click('#__tile3')
      .waitForElementVisible('div #__filter0-text', waitingTime)
      .pause()
      .assert.containsText('div.sapMITBScrollContainer', 'Requests')
  },

  'step two' : function (browser) {
    browser
      .click('button[name=btnG]')
      .pause(waitingTime)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};