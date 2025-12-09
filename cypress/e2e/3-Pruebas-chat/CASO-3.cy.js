describe("Caso 3: Filtros de productos", () => {
    it("Debe ordenar los productos de menor a mayor precio", () => {
        // 1. Iniciar seccion
        cy.visit("https://www.saucedemo.com/");
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        // 2. Localizar el filtro y seleccionar la opción de precio bajo a alto ('lohi')
        cy.get('[data-test="product-sort-container"]').select('lohi');

        // 3. Validar que el primer producto de la lista ahora se llama "Sauce Labs Onesie"
        cy.get('[data-test="inventory-item-name"]').first().should('have.text', 'Sauce Labs Onesie');        
    })
})