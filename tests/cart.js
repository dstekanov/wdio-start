describe('Cart Functionality', () => {
    var btn = "#buyNowButton";
    var qty = "#qty";
    beforeEach(() => {
        browser.url('/product-page.html');
    })

    it('should only let you buy after setting quantity', () => {
        expect($(btn).isEnabled(), "'but now' should be disabled for begin").to.be.false;
        $(qty).setValue(10);
        expect($(btn).isEnabled(), "'but now' is now enabled").to.be.true;
    })

    describe('checkout process', () => {
        beforeEach(() => {
            $(qty).setValue(10);
            $(btn).click();
        })
    
        it('should disable buy now button during processing', () => {
            expect($(btn).isEnabled(), "'but now' should be disabled after clicking").to.be.false;
            expect($(btn).getText(), "Verify 'but now' text has changed").to.contain("Purchasing");
        })

        it('should show a thank you message with qty and type', () => {
            var thankYou = ".callout*=Thank you human";
            $(thankYou).waitForExist(3000);
            expect($(thankYou).getText()).to.contain("10 T-800 Model 101");
        })
        
        it('should reset button text after purchasing complete', () => {
            browser.waitUntil(() => {
                return $(btn).getText() !== 'Purchasing...'
            }, 3000);

            expect($(btn).getText()).to.contain("Buy Now");
        })
    })
})