
/// <reference types="Cypress" />
describe('Test10 Suite', () => {

  it('Test case10 - Mouse over', () => {
    
    
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    //force to click hidden element
    //cy.contains("Top").click({force:true})
    //cy.url().should('include', 'top')

    // no support for mouse over action in cypress.
    // we can achive through jQuery
    cy.get("#mousehover").next().invoke('show')
    
    cy.contains('Top').click()
    cy.url().should('include', 'top')



  })


})