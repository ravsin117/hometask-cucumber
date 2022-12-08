
const {expect} = require('chai')
class VerifyKeystroke{
    async openwindow(url){
        await await browser.url(url);
    }
    async verifytextentered(){
        let result = await $('#result').getText();
        await expect(result).toHaveText("You entered: BACK_SPACE")
    }
}
module.exports = new VerifyKeystroke();