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
    cy.visit('http://localhost:3000/search/cooking');
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

  it('should take us to the search results page when we click the Explore link ', () => {
    cy.get('a[href="/search/results"]')
      .click()
      .get('body')
      .contains('Search for item');
  });

  it('should take us to the Auth0 Sign in page', () => {
    cy.get('.navbar-buttons > .MuiButton-root').click();
  });

  it('should type in text in the input and then click the search button', () => {
    cy.get(`.MuiFormControl-root`)
      .type(`cooking`)
      .get(`.css-d1ev6n-MuiStack-root > .MuiButton-root`)
      .click()
      .url(`includes`, `http://localhost:3000/search/cooking`);
  });

  it(`Should test that the footer has text and an img inside of it`, () => {
    cy.get(`.footerWrap`)
      .contains('Copyright © 2022.')
      .get(`.MuiTypography-body2 > :nth-child(2)`)
      .contains('WeShare All rights reserved.')
      .get(`.MuiTypography-root > img`)
      .click()
      .url()
      .should('include', '/');
  });

  it('Should display tags and those tags should be clickable, taking the user to a search page', () => {
    const tags = ['art', 'painting', 'disasters'];
    // prettier-ignore
    tags.forEach((item, index)=>{
        cy.get(`:nth-child(1) > .MuiTypography-inherit > .MuiPaper-root > .css-pejsfz-MuiCardActions-root > [data-cy="course-tutor-tags"] > :nth-child(${index +1}) > .MuiButton-root`).click()
        cy.url().should(`include`, `/search/${item}`).go("back");
    })
  });

  it(`Should take the users to the course page once they click 'more info`, () => {
    cy.get(
      `:nth-child(1) > .MuiTypography-inherit > .MuiPaper-root > .css-11orm13-MuiCardActions-root > .MuiButton-root`
    )
      .click()
      .url()
      .should('include', 'http://localhost:3000/courses/1');
  });
});
