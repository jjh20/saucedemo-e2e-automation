describe("Caso 1: prueba del login", () => {
    it("Debe iniciar seccion correctamente con credenciales validas", () =>{
        cy.visit("https://www.saucedemo.com/");
        
        //Escribimos en usuario
        cy.get('[data-test="username"]').type("standard_user");

        //Escribimos el password
        cy.get('[data-test="password"]').type("secret_sauce");


        //Clic sobre el boton login
        cy.get('[data-test="login-button"]').click();
         
        //Validar que la url haya cambiado
        cy.url().should('include', '/inventory.html');

        //
        //Validar titulo Products
        cy.get('.title').should('have.text', 'Products');
    })

} )