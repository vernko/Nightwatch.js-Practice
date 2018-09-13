module.exports = {
    '@tags': ['helloworldclick'],
    'We are going to clickclickclick.com and click on a buton': function (browser) {
        browser
            .url('https://clickclickclick.click/#b3fa34df276060583a707255d932c7ea')
            .waitForElementVisible('body', 1000)
            .click('a[class=button]')
            .pause(3000)
            .end();
        console.log('Hello world click');
    }
}