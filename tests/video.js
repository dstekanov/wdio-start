browser.addCommand('isVideoPaused', () => {
    return browser.execute(() => {
        var video = document.querySelector('#dance-video');
        return video.paused;
    })
});

describe('About Us video', () => {
    beforeEach(() => {
        browser.url('./');
        $('=About Us').click();
    });

    it('should open the modal with video paused', () => {
        expect(browser.isVideoPaused()).to.be.true;
    });

    it('play video on "play" click', () => {
        $('#play-btn').click();
        expect(browser.isVideoPaused()).to.be.false;
    })

});