const assert = require('assert')

describe('Shop CTA button', () => {
    it('should link to the product page', () => {
        browser.url('./')
        const title1 = browser.getTitle()
        assert.equal(title1, 'Robot Parts Emporium')

        $('.fancy.button').click()
    
        const title2 = browser.getTitle()
        assert.equal(title2, 'Totally Not Evil Sentient Robot - Robot Parts Emporium')

        var url = browser.getUrl();
        var isProductPage = url.endsWith("product-page.html"); 
        assert.ok(isProductPage);
    })
})