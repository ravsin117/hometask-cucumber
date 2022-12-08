

class LoginPage{
    get userName(){
        return $('#user-name')
    }
    get passWord(){
        return $('#password')
    }
    get loginBtn(){
        return $('#login-button')
    }
    async gotoWebsite(url){
        await browser.url(url)
    }
    async login(username,password){
        await this.userName.setValue(username);
        await this.passWord.setValue(password);
        await this.loginBtn.click();
    }
    
}
module.exports = new LoginPage()