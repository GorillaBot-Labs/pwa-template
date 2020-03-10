// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add("login", (email, password) => {
    cy.getByTestId('email').type(email);
    cy.getByTestId('password').type(password);
    cy.getByTestId('submit').click();
});
