context('SearchPage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/search/results');
  });

  it('WeShare: takes us to the home page', () => {
    cy.get(`#image-logo`)
      .click({ force: true })
      .url('includes', 'http://localhost:3000');
  });

  // it('should type in text in the input and then click the search button', () => {
  //   cy.get(`.MuiFormControl-root`)
  //     .type(`cooking`)
  //     .get('.wrapProfileSearchBar > .MuiBox-root > .MuiButton-root')
  //     .click()
  //     .url(`includes`, `http://localhost:3000/search/cooking`);
  // });

  // it('should display a card image once a search is done, based on the search term', () => {
  //   cy.get(`.MuiFormControl-root`)
  //     .type(`art`)
  //     .get('.wrapProfileSearchBar > .MuiBox-root > .MuiButton-root')
  //     .click()
  //     .url(`includes`, `http://localhost:3000/search/art`)
  //     .get(
  //       ':nth-child(1) > .MuiTypography-inherit > .MuiPaper-root > .MuiCardMedia-root'
  //     )
  //     .should('be.visible');
  // });

  // it('should display a card course title once a search is done, based on the search term', () => {
  //   cy.get(`.MuiFormControl-root`)
  //     .type(`art`)
  //     .get('.wrapProfileSearchBar > .MuiBox-root > .MuiButton-root')
  //     .click()
  //     .url(`includes`, `http://localhost:3000/search/art`)
  //     .get(
  //       ':nth-child(1) > .MuiTypography-inherit > .MuiPaper-root > .MuiCardContent-root > .MuiTypography-h5'
  //     )
  //     .contains('Painting Disasters');
  // });

  // it('should load the course tutors name on the course card', () => {
  //   cy.get(`.MuiFormControl-root`)
  //     .type(`art`)
  //     .get('.wrapProfileSearchBar > .MuiBox-root > .MuiButton-root')
  //     .click()
  //     .url(`includes`, `http://localhost:3000/search/art`)
  //     .get(
  //       ':nth-child(1) > .MuiTypography-inherit > .MuiPaper-root > .MuiCardContent-root > .courseCardContentTeacherName'
  //     )
  //     .contains('Simona Mountcastle');
  // });

  // it(`Should load the course short description`, () => {
  //   cy.get(`.MuiFormControl-root`)
  //     .type(`art`)
  //     .get('.wrapProfileSearchBar > .MuiBox-root > .MuiButton-root')
  //     .click()
  //     .url(`includes`, `http://localhost:3000/search/art`)
  //     .get(
  //       ':nth-child(1) > .MuiTypography-inherit > .MuiPaper-root > .MuiCardContent-root > .courseCardContentCourseBrief'
  //     )
  //     .contains(
  //       'Master cleanse taiyaki ethical bushwick slow-carb migas XOXO direct trade'
  //     );
  // });

  it('Should display tags and those tags should be clickable, taking the user to a search page', () => {
    const tags = ['art', 'painting', 'disasters'];
    // prettier-ignore
    tags.forEach((item, index)=>{
        cy.visit('http://localhost:3000/search/results')
        .get(`.MuiFormControl-root`)
        .type(`art`)
        .get('.wrapProfileSearchBar > .MuiBox-root > .MuiButton-root')
        .click()
        .get(`:nth-child(1) > .MuiTypography-inherit > .MuiPaper-root > .css-pejsfz-MuiCardActions-root > [data-cy="course-tutor-tags"] > :nth-child(${index +1}) > .MuiButton-root`).click()
        cy.url().should(`include`, `/search/${item}`);
    })
  });

  it(`Should take the user to the course page once they click "more info" `, () => {});

  // it('should take us to the Auth0 Sign in page', () => {
  //   cy.get('.navbar-buttons > .MuiButton-root').click();
  // });

  // If there is a search result, Cards: includes , tags, etc

  // Cards: Clicking on Cards takes user to "/courses/{id}"
  // Footer: Copyright text and img
});
