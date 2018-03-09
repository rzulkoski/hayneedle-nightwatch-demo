import {NightwatchBrowser} from 'nightwatch'

module.exports = {
    'PDP Test': function (browser: NightwatchBrowser) {
        browser
            .url('https://stage.hayneedle.local')
            .waitForElementVisible('//input[@name="Ntt"]', 5000)
            .setValue('//input[@name="Ntt"]', ['cwr116', browser.Keys.ENTER].join(''))
            .waitForElementVisible('//div[@class="pdp-title"]', 10000)
            .expect.element('//div[@class="pdp-title"]').text.to.contain('Coral Coast')
        
        browser.end()
    }
};