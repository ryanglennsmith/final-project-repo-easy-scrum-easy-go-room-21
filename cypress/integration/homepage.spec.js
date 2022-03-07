/// <reference types="cypress" />

// example
// context('page name', () => {
//     beforeEach(() => {
//       cy.visit('http://localhost:3000/');
//     });
//     it('what it should do', () => {
//       cy.get('element').contains('text');
//     });
//   });

context('page name', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('should takes us to home page, when we click on the WeShare logo', () => {
    cy.get('img[href*="/"]').click({ multiple: pass });

    cy.url().should('include', '/');
  });
});
