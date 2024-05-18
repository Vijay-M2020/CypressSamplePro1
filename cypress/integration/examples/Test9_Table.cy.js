
/// <reference types="Cypress" />
describe('Test8 Suite', () => {

  it('Test case8 - window handles - child window', () => {
    
    
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get("#product>tbody>tr").each((el, index, list)=>{
      const couresText = el.find('td').eq(1).text()
      //cy.log(couresText)
      if(couresText == "Master Selenium Automation in simple Python Language")
      {
        const coursePrice = el.find('td').eq(2).text()
        cy.log(coursePrice)
      }
    })
    ///Way2
    cy.get("#product>tbody>tr td:nth-child(2)").each((el, index, list)=>{
      //cy.log(el.text())
      const couresName = el.text()
      
      if(couresName == "Master Selenium Automation in simple Python Language")
      {
        const coursePrice = el.next().text()
        cy.log(coursePrice)
      }
    })

    //Way3
    cy.get("#product>tbody>tr td:nth-child(2)").each((el, index, list)=>{
      //cy.log(el.text())
      const couresName = el.text()
      
      if(couresName == "Master Selenium Automation in simple Python Language")
      {
        const coursePrice = el.next()
        
        cy.get("#product>tbody>tr td:nth-child(2)").eq(index).next().then((price)=>{
          expect("25").to.equals(price.text())
        })
      }
    })

  })


})