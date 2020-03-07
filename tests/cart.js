// import cart from '../pages/cart.page'
var cart = require('../pages/cart.page')

describe('Cart Functionality', () => {
    beforeEach(() => {
        browser.url('/product-page.html');
    })

    it('should only let you buy after setting quantity', () => {
        expect(cart.btn.isEnabled(), "'but now' should be disabled for begin").to.be.false;
        cart.qty.setValue(10);
        expect(cart.btn.isEnabled(), "'but now' is now enabled").to.be.true;
    })

    describe('checkout process', () => {
        beforeEach(() => {
            cart.qty.setValue(10);
            cart.btn.click();
        })
    
        it('should disable buy now button during processing', () => {
            expect(cart.btn.isEnabled(), "'but now' should be disabled after clicking").to.be.false;
            expect(cart.btn.getText(), "Verify 'but now' text has changed").to.contain("Purchasing");
        })

        it('should show a thank you message with qty and type', () => {
            cart.thankYou.waitForExist(3000);
            expect(cart.thankYou.getText()).to.contain("10 T-800 Model 101");
        })
        
        it('should reset button text after purchasing complete', () => {
            browser.waitUntil(() => {
                return cart.btn.getText() !== 'Purchasing...'
            }, 3000);

            expect(cart.btn.getText()).to.contain("Buy Now");
        })
    })
})