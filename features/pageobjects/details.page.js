class DetailsPage{
    get firstName(){
        return $('#first-name');
    }
    get lastName(){
        return $('#last-name');
    }
    get postalCode(){
        return $('#postal-code');
    }
    get continueBtn(){
        return $('#continue')
    }
    async enterDetails(firstName,lastName,code) {
        await this.firstName.setValue(firstName)
        await this.lastName.setValue(lastName)
        await this.postalCode.setValue(code)
    }
}
module.exports = new DetailsPage()