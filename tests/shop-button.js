describe('Shop CTA button', () => {
    it('should link to the product page', () => {
        browser.url('./')

        expect(browser.getTitle()).to.equal('Robot Parts Emporium')

        $('.fancy.button').click()
    
        expect(browser.getTitle()).to.equal('Totally Not Evil Sentient Robot - Robot Parts Emporium')
        expect(browser.getUrl()).to.include('product-page.html', 'URL mismatch');
    })
})