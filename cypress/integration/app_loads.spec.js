it('A user loads the app', () => {
    cy.visit('/');

    cy.contains('React App');
});
