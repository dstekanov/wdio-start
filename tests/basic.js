const assert = require('assert')

describe('Shop CTA button', () => {
    it('should link to the product page', () => {
        browser.url('./')
        const title1 = browser.getTitle()
        assert.strictEqual(title1, 'Robot Parts Emporium')

        $('.fancy.button').click()
    
        const title2 = browser.getTitle()
        assert.strictEqual(title2, 'Totally Not Evil Sentient Robot - Robot Parts Emporium')
    })
})