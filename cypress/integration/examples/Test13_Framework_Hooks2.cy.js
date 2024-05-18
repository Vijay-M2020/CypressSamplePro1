
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
import HomePage from '../pageObject/HomePage'

describe('Test Suite', () => {

  before(()=>{
    // Load fixture
    cy.fixture("userinput").then(function(data){
      this.data = data
    })
    
  })

  it('Test case1', function() {
    const homePage = new HomePage();

    cy.visit("https://rahulshettyacademy.com/angularpractice/")
    homePage.getNameMain().type(this.data.name)
    homePage.getSelectGender().select(this.data.gender)
    
    homePage.getNameBottom().should('have.value', this.data.name)
    homePage.getNameMain().should('have.have.attr', 'minlength', 2 )
    homePage.getRadioButton().should('be.disabled')
    
    homePage.getShopTab().click()

   // var listOfProductToAdd = [this.data.selectProduct1, this.data.selectProduct2]
    cy.selectProduct(this.data.listOfProductToAdd)

  })

  


})