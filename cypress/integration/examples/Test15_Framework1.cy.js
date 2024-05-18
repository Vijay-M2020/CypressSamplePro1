
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
import HomePage from '../pageObject/HomePage'
import ShopPage from '../pageObject/ShopPage'
import ProtoCommerce from '../pageObject/ProtoCommercePage'
import CheckOutPage from '../pageObject/CheckOutPage'

describe('Test Suite', () => {

  before(()=>{
    // Load fixture
    cy.fixture("userinput").then(function(data){
      this.data = data
    })
    
  })

  it('Test case1', function() {
    const homePage = new HomePage();
    const shopePage = new ShopPage();
    const protoCommercePage = new ProtoCommerce();
    const checkOutPage = new CheckOutPage();

    cy.visit(Cypress.env('qaURL')+"/angularpractice/")
    homePage.getNameMain().type(this.data.name)
    homePage.getSelectGender().select(this.data.gender)
    
    homePage.getNameBottom().should('have.value', this.data.name)
    homePage.getNameMain().should('have.have.attr', 'minlength', 2 )
    homePage.getRadioButton().should('be.disabled')
    
    homePage.getShopTab().click()

   // var listOfProductToAdd = [this.data.selectProduct1, this.data.selectProduct2]
    cy.selectProduct(this.data.listOfProductToAdd)
/*
    shopePage.getChecoutButton().click()
    cy.sumOfAllProductsPrice(this.data.listOfProductToAdd);
    protoCommercePage.getCheckOutButton().click()
    checkOutPage.getDeliveryLocationInputBox().type(this.data.deliveryLocation)
    checkOutPage.getSuggessedLocation().click()
    checkOutPage.getCheckBoxIAgree().check({force: true});
    checkOutPage.getPurchaseButton().click()
    cy.verifySuccessMessage()
*/

  })

  


})