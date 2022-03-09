context('SearchPage', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/search/results');
    });

    it("WeShare: takes us to the home page" , () => {
      cy.get(`#image-logo`)
      .click({force: true})
      .url('includes','http://localhost:3000')
    })
    
    // it('should take us to the Auth0 Sign in page', () => {
    //   cy.get('.navbar-buttons > .MuiButton-root').click();
    // });

    // it('should type in text in the input and then click the search button', () => {
    //   cy.get(`.MuiFormControl-root`)
    //     .type(`cooking`)
    //     .get('.wrapProfileSearchBar > .MuiBox-root > .MuiButton-root')
    //     .click()
    //     .url(`includes`, `http://localhost:3000/search/cooking`);
    // });
   

   
    // If there is a search result, Cards: includes image, tags, title, name, description etc
    //Tags: Clicking on the tags takes users to the "/search/{search}"
    // Cards: Clicking on Cards takes user to "/courses/{id}"
   // Footer: Copyright text and img
});  


