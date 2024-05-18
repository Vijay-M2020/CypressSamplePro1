/// <reference types="Cypress" />

describe('Test2 Suite', ()=>{
it('Test case1', ()=>{

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

    // Step1: Add two items carrot & Tomoto in card.
    cy.get("input[placeholder='Search for Vegetables and Fruits']").as('SearchInboxLocator')
    cy.get(".product").as('ProductLocator')

    var carrotPrice=0
    var tomatoPrice=0
    cy.get('@SearchInboxLocator').type('Carrot')
    cy.wait(2000)

    cy.get('@ProductLocator').each(($el, index, list)=>{
        const productText = $el.find('h4').text()
        if(productText == 'Carrot - 1 Kg'){
            carrotPrice = $el.find('.product-price').text()
            cy.log("The carrot 1Kg price is " + carrotPrice)
            cy.wrap($el).contains('ADD TO CART').click()
        }
    })

    cy.get('@SearchInboxLocator').clear()
    cy.wait(2000)

    cy.get('@SearchInboxLocator').type('Tomato')
    cy.wait(2000)

    cy.get('@ProductLocator').each(($el, index, list)=>{
        const productText = $el.find('h4').text()
        if(productText == 'Tomato - 1 Kg'){
            tomatoPrice = $el.find('.product-price').text()
            cy.log("The tomato 1Kg price is " + tomatoPrice)
            cy.wrap($el).contains('ADD TO CART').click()
        }
    })

    cy.log('The total price is ' + (carrotPrice+tomatoPrice))
    cy.get("[alt='Cart']").click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()
    cy.contains('Proceed')

    // Step2: Verify two items total price and items count.
    // Step3: Verify two items visible in the card.
    // Step4: Click proceed to check out button.
    // Step5: Click button place order.
    // Step6: Verify button Proceed is displaying.
})
})