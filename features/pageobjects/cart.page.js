const {expect} = require('chai')

class CartPage{
    get prod1(){
        return $('#add-to-cart-sauce-labs-backpack');
    }
    get prod2(){
        return $('#add-to-cart-sauce-labs-bike-light')
    }
    get cartBtn(){
        return $('.shopping_cart_link')
    }
    async addProductsInCart(){
        await this.prod1.click();
        await this.prod2.click();
    }
    async navigateToCart(){
        await this.cartBtn.click();
    }
    async verifyCartItemPrice(){
        const cartPrices = await $$('.inventory_item_price');
        let prod1price = await cartPrices[0].getText();
        let prod2price = await cartPrices[1].getText();
        expect(prod1price).to.eq('$29.99');
        expect(prod2price).to.eq('$9.99');
    }
    async removeItem(){
        await $('#remove-sauce-labs-bike-light').click();
    }
    async proceedToCheckout(){
        await $('.checkout_button').click();
    }
}
module.exports = new CartPage()