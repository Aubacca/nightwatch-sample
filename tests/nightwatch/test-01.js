module.exports = {
  '@tags': ['bdd', 'nightwatch', 'homepage'],
  '@disabled': false,
  'BDD nightwatch homepage test (lots of framework error messages!)' : function (client) {
    var timeout = 1000; // in ms

    client
      .url('http://nightwatchjs.org/')
      .waitForElementVisible('body', timeout)
      .pause(timeout);

    client.click('a[href="/guide"]').waitForElementVisible('a[href="#page-objects"]', timeout);
    client.expect.element('a[href="#page-objects"]').to.have.text.which.contains('Working with Page Objects');

    // // expect element <#lst-ib> to have css property 'display'
    // client.expect.element('#lst-ib').to.have.css('display');

    // // expect element  to have attribute 'class' which contains text 'vasq'
    // client.expect.element('body').to.have.attribute('class').which.contains('vasq');

    // // expect element <#lst-ib> to be an input tag
    // client.expect.element('#lst-ib').to.be.an('input');

    // // expect element <#lst-ib> to be visible
    // client.expect.element('#lst-ib').to.be.visible;

    client.end();
  }
};
