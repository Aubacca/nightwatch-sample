var testscript = 'google_search_02';

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

var errorDisplayed = false,
    successDisplayed = false;


driver.get('http://www.google.ch');
driver.findElement(By.name('q')).sendKeys('wiki');
driver.findElement(By.name('btnG')).click();
driver.wait(check_title, 10000, testscript + ': Checking browser title ...');
driver.quit();

function check_title () {
    var promise = driver.getTitle().then(function (title) {
        if (title === 'wiki - Google-Suche') {
            if (!successDisplayed) {
                successDisplayed = true;
                console.log('success');
            }
            promise.resolve(true);
        } else {
            if (!errorDisplayed) {
                errorDisplayed = true;
                console.log('error ..', title);
            }
        }
    }
    );
    return promise;
}
