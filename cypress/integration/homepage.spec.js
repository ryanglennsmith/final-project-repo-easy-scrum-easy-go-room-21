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
    cy.visit('http://localhost:3000');
  });

  

  it('Call to action header: text includes "Find The Perfect {Tutor}"', () => {
    cy.get('h1').contains('Find The Perfect {Tutor}');
  });

  it('Call to action text: text includes ', () => {
    cy.get('p').contains(
      'Build, monetize, manage, and grow membership sites, courses, subscriptions, communities, events, or the digital product of your dreams'
    );
  });

  it('should take us to the search results page when we click the Explore link ', () => {
    cy.get('[href="/search/results"]')
      .click()
      .get('body')
      .contains('Search for item');
  });

  

  it('Should display tags and those tags should be clickable, taking the user to a search page', () => {
    const tags = ['art', 'painting', 'disasters'];
    // prettier-ignore
    tags.forEach((item, index)=>{
        cy.visit('http://localhost:3000')
        cy.get(`:nth-child(1) > .MuiTypography-inherit > .MuiPaper-root > .css-pejsfz-MuiCardActions-root > [data-cy="course-tutor-tags"] > :nth-child(${index +1}) > .MuiButton-root`).click()
        cy.url().should(`include`, `/search/${item}`);
    })
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

  it('should load the courses full image ', () => {
    cy.get(
      ':nth-child(1) > .MuiTypography-inherit > .MuiPaper-root > .MuiCardMedia-root'
    ).should('be.visible');
  });
  it('should load the courses title ', () => {
    cy.get(
      ':nth-child(1) > .MuiTypography-inherit > .MuiPaper-root > .MuiCardContent-root > .MuiTypography-h5'
    ).contains('Painting Disasters');
  });

  it("should load the courses tutor's name", () => {
    cy.get(':nth-child(1) > .MuiTypography-inherit > .MuiPaper-root > .MuiCardContent-root > .courseCardContentTeacherName').contains('Simona Mountcastle');
  });


  it('should load the courses short description', () => {
    cy.get(':nth-child(1) > .MuiTypography-inherit > .MuiPaper-root > .MuiCardContent-root > .courseCardContentCourseBrief').contains(
      "Master cleanse taiyaki ethical bushwick slow-carb migas XOXO direct trade"
    );
  });


  it('Should display a rating component with correct rating score', () => {
    cy.get(':nth-child(1) > .MuiTypography-inherit > .MuiPaper-root > .css-11orm13-MuiCardActions-root > .css-1bt83dk-MuiTypography-root').should('be.visible');
    cy.get(':nth-child(1) > .MuiTypography-inherit > .MuiPaper-root > .css-11orm13-MuiCardActions-root')
  });

 
  it(`Should take the users to the course page once they click 'more info`, () => {
    cy.get(
      `:nth-child(1) > .MuiTypography-inherit > .MuiPaper-root > .css-11orm13-MuiCardActions-root > .MuiButton-root`
    )
      .click()
      .url()
      .should('include', 'http://localhost:3000/courses/1');
  });

   
  it('should take us to the Auth0 Sign in page', () => {
    cy.get('.navbar-buttons > .MuiButton-root').click();
  });

});
