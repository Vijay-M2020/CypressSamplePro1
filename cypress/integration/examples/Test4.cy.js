
/// <reference types="Cypress" />
describe('Test4 Suite', () => {

  it('Test case4 - Handle popup', () => {
    
    
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    

    //popups
    // Two type of pops 1. with only ok button. 2. with Confirm and cancel button.
    // Cypress automatically accept both type popups.

    cy.get("#alertbtn").click()
    
    cy.on("window:alert", (msg)=>{
      expect("Hello , share this practice page and share your knowledge").to.equals(msg)
    })

    cy.get("#confirmbtn").click()
    cy.on("window:confirm", (msg)=>{
      expect("Hello , Are you sure you want to confirm?").equals(msg)
      return false
    })

  })
})