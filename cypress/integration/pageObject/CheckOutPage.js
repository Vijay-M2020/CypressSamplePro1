class CheckOutPage{
    getDeliveryLocationInputBox(){
        return cy.get("#country")
    }
    getSuggessedLocation(){
        //Cypress.config('defaultCommandTimeout'= 10000)
        return cy.get(".suggestions>ul>li>a", {timeout:10000})
    }
    getCheckBoxIAgree(){
        return cy.get("#checkbox2")
    }
    getPurchaseButton(){
        return cy.get("input[type='submit']")
    }
}
export default CheckOutPage;