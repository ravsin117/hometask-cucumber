const {expect} = require('chai');

class Checkout{
    get itemPrice(){
        return $('.inventory_item_price');
    }
    get finalItemPrice(){
        return $('.summary_subtotal_label');
    }
    get finishBtn(){
        return $('#finish');
    }
    async verifyprice(){
        let priceOfItem = await this.itemPrice;
        priceOfItem = await priceOfItem.getText();
        priceOfItem = priceOfItem.substring(1);
        
        let finalPrice = await this.finalItemPrice;
        finalPrice = await finalPrice.getText();
        finalPrice = finalPrice.substring(13)
        await expect(Number(priceOfItem)).to.be.equals(Number(finalPrice));

    }
}
module.exports = new Checkout();