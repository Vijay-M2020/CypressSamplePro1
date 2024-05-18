
/// <reference types="Cypress" />
describe('Test8 Suite', () => {

  it('Test case8 - window handles - child window', () => {
    
    
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    
    
    cy.get("#openwindow").invoke('removeAttr', 'target').click()

    
    cy.origin("https://www.qaclickacademy.com", ()=>{
      cy.get("#navbarSupportedContent [href='about.html']").click()
      cy.contains('Welcome to QAClick Academy')
    })

  })


})