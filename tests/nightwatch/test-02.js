module.exports = {
  '@tags': ['bdd', 'nightwatch', 'homepage', 'po'],
  '@disabled': false,
  'BDD nightwatch homepage test with Page Objects' : function (client) {
    var po01 = client.page.nightwatchPo01();

    po01.navigate().assert.title('Nightwatch.js | Node.js powered End-to-End testing framework');

    po01.click('@menuHome');
    po01.click('@menuGettingStarted');
    po01.click('@menuDeveloperGuide');
    po01.click('@menuApiReference');
    po01.click('@menuBlog');
    po01.click('@menuContact');

    po01.click('@menuDeveloperGuide');


    client.expect.element('a[href="#page-objects"]').to.have.text.which.contains('Working with Page Objects');

    po01.click('@menuDeveloperGuide');

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
