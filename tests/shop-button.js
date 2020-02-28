const assert = require('chai').assert

describe('Shop CTA button', () => {
    it('should link to the product page', () => {
        browser.url('./')

        assert.equal(browser.getTitle(), 'Robot Parts Emporium')

        $('.fancy.button').click()
    
        assert.equal(browser.getTitle(), 'Totally Not Evil Sentient Robot - Robot Parts Emporium')

        assert.include(browser.getUrl(), "product-page.html", "URL mismatch");
    })
})