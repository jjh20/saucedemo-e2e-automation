describe("Test-4, prueba E2E", () => {
    it("Simulacion de compra", () => {

        cy.visit("https://www.saucedemo.com/");
        //Iniciamos sección
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();

        //Agregamos producto al carrito
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        //Seleccionamos el carrito
        cy.get('[data-test="shopping-cart-link"]').click();

        //Vamos a chekout
        cy.get('[data-test="checkout"]').click();

        //Llenamos el formulario
        cy.get('[data-test="firstName"]').type("Cuco");
        cy.get('[data-test="lastName"]').type("Castillo");
        cy.get('[data-test="postalCode"]').type("11300");

        //Boton de continuar
        cy.get('[data-test="continue"]').click();

        //Boton de finalizar
        cy.get('[data-test="finish"]').click();

        //Confirmar mensaje
        cy.get('[data-test="complete-header"]').should("have.text", "Thank you for your order!");

    })
})