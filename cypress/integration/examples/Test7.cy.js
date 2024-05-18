
/// <reference types="Cypress" />
describe('Test7 Suite', () => {

  it('Test case7 - window handles', () => {
    
    
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    // Handle new tab.
    // Cypress directly not handle this. By disabling opening tab in separate, open on the same window.
    cy.get("#opentab").invoke('removeAttr', 'target').click()

    //Some action on the new tab site
    cy.origin("https://www.qaclickacademy.com", ()=>{
      cy.get("#navbarSupportedContent [href='about.html']").click()
      cy.contains('Welcome to QAClick Academy')
    })
    cy.go('back')
    //cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //cy.get("#openwindow").invoke('removeAttr', 'onclick').click()
    cy.get("#openwindow").click()
    cy.get("#navbarSupportedContent [href='about.html']").click()
      cy.contains('Welcome to QAClick Academy')
    


  })


})