describe('Homepage FAW Accordion', () => {
    beforeEach( () => {
        browser.url('./');
    })

    it('should show first section on page load', () => {
        var firstHeight = $('.accordion .accordion-item:first-child .accordion-content').getCSSProperty('height');

        expect(firstHeight.parsed.value).to.be.greaterThan(0);
    })

    it('should not show other content', () => {
        expect($('.accordion .accordion-item:nth-of-type(2) .accordion-content').isDisplayed()).to.be.false;
    })
})