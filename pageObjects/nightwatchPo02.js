module.exports = {
  url: 'http://nightwatchjs.org/',
  sections: {
    homepage: {
      selector: 'body',
      elements: {
        topmenuDeveloperGuide: 'a[href="/guide"]',
        submenuWorkingWithPageObjects: 'a[href="#page-objects"]'
      }
    }
  }
};