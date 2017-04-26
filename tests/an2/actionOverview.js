module.exports = {
  '@tags': ['AN2', 'actionOverview'],
  '@disabled': true,
  'AN2 - Action Overview' : function (client) {
    baseUrl = 'http://s5xdb.roche.com:50000/irj/portal/fiori#Shell-home';
    
    client
      .url(baseUrl)
      .waitForElementVisible('body', 1000)
      .pause(1000);

    // expect element  to be present in 1000ms
    client.expect.element('body').to.be.present.before(1000);
    client.expect.element('#__tile3').to.be.present.before(1000);

    // expect element <#__tile3> to have css property 'display'
    client.expect.element('#__tile3').to.have.attribute('class').which.contains('sapUshellTileBase');
//    client.expect.element('#__tile3').to.have.css('sapUshellTileBase');

    client.click('#__tile3');

    // expect element  to have attribute 'class' which contains text 'sapUiBody sapUShellFullHeight'
    client.expect.element('body').to.have.attribute('class').which.contains('sapUiBody');
    client.expect.element('body').to.have.attribute('class').which.contains('sapUShellFullHeight');

    // expect element <#lst-ib> to be an input tag
    client.expect.element('#__filter0-text').to.be.present.before(1000);
/*
    client.expect.element('#__filter0-text').to.equal('Parents');
    client.expect.element('#__filter0-text').to.be.an('div');
    client.expect.element('#__filter1-text').to.be.an('div');
    client.expect.element('#__filter1-text').to.equal('Requests');
    client.expect.element('#__filter2-text').to.be.an('div');
    client.expect.element('#__filter2-text').to.equal('Actions');

    // expect element <#lst-ib> to be visible
    client.expect.element('#lst-ib').to.be.visible;
*/

    client.end();
  }
};
