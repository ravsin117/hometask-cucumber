const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page')
const cartPage = require('../pageobjects/cart.page')
const detailsPage = require('../pageobjects/details.page')
const checkoutPage = require('../pageobjects/checkout.page');
const browserWindow = require('../pageobjects/window.page');
const verifyKeystrokePage = require('../pageobjects/verifyKeystroke.page')
const {expect} = require('chai')
Given(/^I am on the login page$/,()=>{
    LoginPage.gotoWebsite('https://www.saucedemo.com/')
})
When(/^I login with (\w+) and (.+)$/,async(username,password)=>{
    await LoginPage.login(username,password)
})

Given(/^I am on products page$/,()=>{
    console.log('yes on products page');
})
When(/^I add 2 products in cart$/,async()=>{
    await cartPage.addProductsInCart();
})
Then(/^Navigate to cart and verify price$/,async()=>{
    await cartPage.navigateToCart();
    await cartPage.verifyCartItemPrice();
})

Given(/^I am on cart page/,()=>{
    console.log('yes on cart page')
})

When(/^I remove a product from cart$/,async()=>{
    await cartPage.removeItem();
})
Then(/^I Navigate to details page$/,async()=>{
    await cartPage.proceedToCheckout();
})

Given(/^I am details page$/,()=>{
    console.log('yes on Details page')
})
When(/^I add the details on the page$/,async()=>{
    await detailsPage.enterDetails("Ravinder","Singh","13934");
})
Then(/^I Navigate to checkout$/,async()=>{
    await detailsPage.continueBtn.click();
})

Given(/^I am checkOut Page$/,()=>{
    console.log('On checkout Page')
})
When(/^I verify the price of the item$/,async()=>{
    await checkoutPage.verifyprice();
})
Then(/^I finish and checkout finally $/,async()=>{
    await checkoutPage.finishBtn.click();
    await browser.pause(5000);
})
//----------------test 2
Given(/^I am on a window$/,async()=>{
    browserWindow.openNewWindow('https://the-internet.herokuapp.com/windows');
})
When(/^I click new window$/,async()=>{
    let clickbtn = await $('a[href="/windows/new"]');
    await clickbtn.click()    
    await browser.switchWindow('https://the-internet.herokuapp.com/windows/new')
})
Then(/^New window opens and i verify that$/,async()=>{
    browserWindow.checkText();
})
// ----------- test 3

Given(/^I am on a browser window$/,async()=>{
    await verifyKeystrokePage.openwindow('https://the-internet.herokuapp.com/key_presses')
    
})
When(/^I enter BACKSPACE in input feild$/,async()=>{
    let inputfield = await $('#target');
    await inputfield.setValue('\uE003')
})
Then(/^I verify that i entered backspace$/,async()=>{
    await verifyKeystrokePage.verifytextentered();
})    




