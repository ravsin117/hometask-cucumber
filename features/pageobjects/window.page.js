const {expect} = require('chai')
class BrowserWindow{
    async openNewWindow(url){
        await browser.url(url);
    }
    async checkText(){
        expect(await $('.example h3').getText()).toHaveTextContaining('New Window');
    }
}
module.exports = new BrowserWindow();