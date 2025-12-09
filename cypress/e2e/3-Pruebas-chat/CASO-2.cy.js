describe("Caso 2-prueba de login", () => {
    it("Validar que login falle con contrasena incorrecta", () => {
        cy.visit("https://www.saucedemo.com/");
         
        // Colocamos usuario
        cy.get('[data-test=username]').type('standard_user');

        //colocamos contrasena
        cy.get('[data-test=password]').type("1234Ja");

        cy.get('[data-test=login-button]').click();

        // Validar que aparezca el mensaje de error y contenga el texto esperado
        cy.get('[data-test="error"]').should('contain', 'Epic sadface');
    })
})