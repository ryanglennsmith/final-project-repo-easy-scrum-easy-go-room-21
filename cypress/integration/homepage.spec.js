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



context('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  // it('should takes us to home page, when we click on the WeShare logo', () => {
  //   cy.get('img[src*="https://i.lensdump.com/i/rLRO3c.png"]').click();
  //   cy.url().should('include', '/');
  // });

  it('Call to action header: text includes "Find The Perfect {Tutor}"', () => {
    cy.get('h1').contains('Find The Perfect {Tutor}');
  });

  it('Call to action text: text includes ', () => {
    cy.get('p').contains(
      'Build, monetize, manage, and grow membership sites, courses, subscriptions, communities, events, or the digital product of your dreams'
    );
  });


});

