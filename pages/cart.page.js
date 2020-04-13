class Cart {

    get btn() {
        return $("#buyNowButton");
    }

    get qty() {
        return $("#qty");
    }

    get thankYou() {
        return $(".callout*=Thank you human");
    }

}

// export default new Cart()
module.exports = new Cart()