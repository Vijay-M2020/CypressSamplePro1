
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Test10 Suite', () => {

  it('Test case10 - Mouse over', () => {
    
    
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    
    //cy.contains('[href="mentorship"]').click()
    cy.frameLoaded("#courses-iframe")
    cy.iframe().find('[href="mentorship"]').eq(0).click()
    cy.wait(2000)
    cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2)

  })


})