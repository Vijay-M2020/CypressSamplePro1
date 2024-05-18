class HomePage{

getNameMain(){
    return cy.get("[name='name']:nth-child(2)");
}

getSelectGender(){
    return cy.get("select");
}

getNameBottom(){
    return cy.get("[name='name']:nth-child(1)");
}

getRadioButton(){
    return cy.get("#inlineRadio3");
}

getShopTab(){
    return cy.get("[href='/angularpractice/shop']");
}
}

export default HomePage;