
/// <reference types="Cypress" />
describe('Test3 Suite', () => {

  it('Test case3 - Handle all type of UI elements', () => {
    
    
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    //Check box selection and validation
    cy.get("[type='checkbox']").as("elementCheckBoxes")
    // Click the check - Option1
    //cy.get("[name='checkBoxOption1']").check().should('be.checked')
    //cy.get("[type='checkbox']").first().check()
    //cy.get("[type='checkbox']").last().check()
    //cy.get("[type='checkbox']").eq(1).check().should('be.checked')
    //cy.get("[type='checkbox']").check('option1').should('be.checked')
    //cy.get("[type='checkbox']").check(['option1', 'option3', 'option4']).should('be.checked')
    cy.get("@elementCheckBoxes").check('option1').should('be.checked').and('have.value', 'option1')
    cy.get("@elementCheckBoxes").check('option2')
    //cy.wait(2000)
    cy.get("@elementCheckBoxes").uncheck('option2')

    //Static drop down selection
    cy.get("#dropdown-class-example").as("elementStaticDropDown")
    //select option by visible text/value/index
    cy.get("@elementStaticDropDown").select('Option2')
    cy.get("@elementStaticDropDown").select('option1')
    cy.get("@elementStaticDropDown").select(3).should('have.value', 'option3')
    //select options by array of visible text/value/index
    //cy.get("@elementStaticDropDown").select(['option1', 'option2', 'option3'])

    //Dynamic drop down
    cy.get("[placeholder='Type to Select Countries']").type('Ind')
    cy.get("li div.ui-menu-item-wrapper")
    .each(($el, index, list)=>{
      var textCountry = $el.text()
      if(textCountry == 'India')
      {
        cy.wrap($el).click()
        
      }
    })
    cy.get("[placeholder='Type to Select Countries']").should('have.value', 'India')

    // Visibility/invisibility of a element in the page
    cy.get("#displayed-text").should('be.visible')
    cy.get("#hide-textbox").click()
    cy.get("#displayed-text").should('not.be.visible')

    //Click radio button through check/click
    //cy.get(".radioButton").check('radio2')
    cy.get("[value='radio1']").check()
    cy.get("[value='radio3']").click().should('be.checked')

    //popups
    // Two type of pops 1. with only ok button. 2. with Confirm and cancel button.
    // Cypress automatically accept both type popups.


  })
})