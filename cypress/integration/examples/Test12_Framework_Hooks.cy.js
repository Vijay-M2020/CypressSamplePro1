
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

before(()=>{
  cy.log("Before all test case run.")
})
after(()=>{
  cy.log("After all test case run.")
})

beforeEach(()=>{
  cy.log("Before each test.")
})

afterEach(()=>{
  cy.log("After each test.")
})

describe('Test Suite', () => {

  it('Test case1', () => {
    
    cy.log("First test case")   

  })

  it("Second test case", ()=>{
    cy.log("Second test case.")
  })


})