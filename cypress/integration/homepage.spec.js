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

// context('Home page', () => {
//   beforeEach(() => {
//     cy.visit('http://localhost:3000/');
//   });
//   it('should takes us to home page, when we click on the WeShare logo', () => {
//     cy.get('img[href*="/"]').click({ multiple: pass });

//     cy.url().should('include', '/');
//   });
// });

context('Search page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/search/cooking');
  });
  it('should takes us to home page, when we click on the WeShare logo', () => {
    cy.get('img[src*="https://i.lensdump.com/i/rLRO3c.png"]').click();
    cy.url().should('include', '/');
  });
});

// context('Header ', () => {
//       beforeEach(() => {
//         cy.visit('http://localhost:3000/');
//       });
//       it('what it should do', () => {
//         cy.get('element').contains('text');
//       });
//     });

