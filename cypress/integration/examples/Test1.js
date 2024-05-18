
describe("Test Suite 1", ()=>{

    it("Sample Test 1", () => {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get("input.search-keyword").type("ca");
        cy.wait(2000)
        //cy.get('div.product-image').should('have.length', 4)
        //cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').find('.product').should('have.length', 4)
        cy.get('.products').find('.product').eq(1).find('div button').click()
        //cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
        //cy.get(':nth-child(2) > .product-action > button').click()

        // Click specific item
        cy.get('.product:visible').each(($el, index, $list)=>{
            const textVeg = $el.find('h4').text()
            if(textVeg.includes('Cashews')){
                cy.wrap($el).find('div button').click()
                
            }
        })


        // Aliasing webelement
        cy.get('.brand.greenLogo').as('logoTextLocator')

        // Print logo
        cy.get('@logoTextLocator').then((logoText)=>{
            console.log('logo text:' + logoText.text())
            const ltext = logoText.text()
            cy.log('logo text:' + ltext)

            if(ltext.includes('GREENKART')){
                cy.log("Successfully verified logo text.")
            }

        })

        // or we can verify text by using chai assertion
        cy.get('@logoTextLocator').should('have.text', 'GREENKART')
        
    })
})