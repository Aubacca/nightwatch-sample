module.exports = {
  '@tags': ['bdd', 'nightwatch', 'homepage', 'po'],
  '@disabled': false,
  'BDD nightwatch homepage test with Page Objects' : function (client) {
    var po02 = client.page.nightwatchPo02();
    var menuSection = po02.section.homepage;

    po02.navigate();
    menuSection.expect.element('@topmenuDeveloperGuide').to.be.visible;
    menuSection.click('@topmenuDeveloperGuide');
    menuSection.expect.element('@submenuWorkingWithPageObjects').to.be.visible;
    menuSection.click('@submenuWorkingWithPageObjects');

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
