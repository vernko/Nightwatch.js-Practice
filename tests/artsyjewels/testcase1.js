// 1) Home Page Should open and validate all the images and buttons are functional.
//     - Steps 
//         - Open Homepage
//         - Click on Homepage Headers.

module.exports = {
    '@tags': ['artsyTestCase1'],
    'Go to Artsy Jewels homepage, click on headers of the homepage.': function (browser) {
        browser
            .url("https://www.artsyjewels.com/")
            .waitForElementVisible('body', 2000)
            .assert.title('Best Online Jewelry Store | Affordable Jewelry Brand – Artsyjewels')
            .moveTo("a[href=/collections]", "Shop Jewelry")
            .click('a[@href=/collections/engagement-rings]')
            .end();
    }
}