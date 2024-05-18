// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("selectProduct", (products)=>{
    cy.get("h4[class='card-title']").each((el, index, list)=>{
      
        cy.log("Product name:"+el.text())
  for(let i=0; i<products.length; i++){
    if(el.text().includes(products[i])){
      cy.log("Found required product: " + products[i])
      cy.get("button.btn.btn-info").eq(index).click()
    }
    //cy.pause()
  }
      })
})

// Find total price of the added product.
Cypress.Commands.add("sumOfAllProductsPrice", (listOfProduct)=>{
  let sum = 0;
  for(let i=0; i<listOfProduct.length; i++){
    
    cy.contains(listOfProduct[i]).parents("tr").find("td").eq(3).find("strong").then((el)=>{
      var product = listOfProduct[i];
      var price = el.text();
      var price = price.split(" ")
      var price = price[1];
      cy.log("Product Name '"+ product +"', Price '" + price + "'")
      sum = sum + Number(price);
    })    
  }
  cy.then(()=>{
    cy.log("The sum is: " + sum)
    cy.get("tr").eq(3).contains("Total").parent("td").next().find("strong").invoke("text").then((el)=>{
      var totalPrice = el.split(" ")
      var totalPrice = Number(totalPrice[1]);
      expect(totalPrice).to.equals(sum)  
    })
    
    
  })

})

// verifySuccessMessage
Cypress.Commands.add("verifySuccessMessage", ()=>{

  cy.get(".alert.alert-success>strong").invoke("text").then((el)=>{
    expect("Success!").to.equals(el)
  })
  cy.get(".alert.alert-success").invoke("text").then((el)=>{
    expect(el).to.contains("Success! Thank you! Your order will be delivered in next few weeks :-).");
  })

})