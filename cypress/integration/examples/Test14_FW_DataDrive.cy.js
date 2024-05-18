
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'


describe('Test Suite', () => {

  before(()=>{
    // Load fixture
    cy.fixture("userinput").then(function(data){
      this.data = data
    })
    
  })

  it('Test case1', function() {
    
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
    
    cy.get("[href='/angularpractice/shop']").click()

    var listOfProductToAdd = [this.data.selectProduct1, this.data.selectProduct2]
    cy.selectProduct(listOfProductToAdd)

  })

  


})