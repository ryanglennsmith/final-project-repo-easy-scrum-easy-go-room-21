// Test 2

const expectedInfo = {
  course_id: 1,
  teacher_name: 'Simona Mountcastle',
  email: 'smountcastle0@ebay.co.uk',
  location: 'Skrwilno',
  bio_text:
    'Small batch crucifix helvetica kickstarter messenger bag before they sold out everyday carry viral ethical af next level chillwave hammock succulents pug.  Mixtape YOLO single-origin coffee sartorial, kitsch pitchfork ugh pabst letterpress.  Sartorial wayfarers lumbersexual retro before they sold out plaid etsy chillwave chicharrones portland gastropub VHS artisan tumblr.  Typewriter shaman locavore ramps, tumeric ugh pabst.  Umami kickstarter coloring book kitsch chartreuse, ramps plaid copper mug.  Offal everyday carry intelligentsia glossier, woke deep v microdosing selvage freegan hexagon scenester.  Mlkshk listicle portland raw denim, meditation lyft hoodie mustache hashtag.',
  long_description:
    "Heirloom gastropub whatever cardigan neutra listicle wayfarers.  Cardigan you probably haven't heard of them four dollar toast, lumbersexual iceland affogato hexagon pabst poutine live-edge vexillologist af prism.  Man bun live-edge subway tile literally lumbersexual pug.  Hella freegan iceland small batch poke slow-carb.  Try-hard vice ennui pork belly, 90's subway tile echo park heirloom bushwick blog readymade lo-fi kogi flannel street art.  Squid farm-to-table butcher ugh heirloom direct trade.",
  is_online: 'true',
  is_offline: 'true',
  image: 'https://images.unsplash.com/photo-1461344577544-4e5dc9487184',
  course_brief:
    'Master cleanse taiyaki ethical bushwick slow-carb migas XOXO direct trade',
  course_title: 'Painting Disasters',
  course_tags: ['art', 'painting', 'disasters'],
  rating: 3.45,
  dates_available: [
    {
      Sunday: 'true',
    },
    {
      Monday: 'true',
    },
    {
      Tuesday: 'true',
    },
    {
      Wednesday: 'false',
    },
    {
      Thursday: 'true',
    },
    {
      Friday: 'false',
    },
    {
      Saturday: 'false',
    },
  ],
  course_bullets: [
    'Prism copper mug edison bulb everyday carry direct trade raclette, pug four dollar toast lumbersexual chia taiyaki before they sold out thundercats',
    'Microdosing pour-over mustache, cardigan 3 wolf moon before they sold out shoreditch sartorial chartreuse cold-pressed cray',
    'PBR&B jean shorts salvia occupy semiotics, hashtag pabst disrupt godard',
  ],
  images: {
    full: 'https://images.unsplash.com/photo-1461344577544-4e5dc9487184?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    thumb:
      'https://images.unsplash.com/photo-1461344577544-4e5dc9487184?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  },
  reviews: [
    {
      reviewer: 'Kelsi Drivers',
      date: '22-06-2020',
      rating: 4,
      review_text: 'Kogi drinking vinegar air plant pop-up',
    },
  ],
};

context('Course page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/courses/1');
  });
  it('should takes us to home page, when we click on the WeShare logo', () => {
    cy.get('img[src*="https://i.lensdump.com/i/rLRO3c.png"]').click();

    cy.url().should('include', '/');
  });
  it('should load the courses full image ', () => {
    cy.get('[data-cy="course-image-full"]').should('be.visible');
  });
  it('should load the courses title ', () => {
    cy.get('[data-cy="course-tutor-intro"]').contains('Painting For Beginners');
  });

  it("should load the courses tutor's name", () => {
    cy.get('[data-cy="course-tutor-intro"]').contains('Simona Rossi');
  });
  it('should load the courses short description', () => {
    cy.get('[data-cy="course-tutor-intro"]').contains(
      'Painting for those who have never painted before or want to reasses their approach to painting'
    );
  });
  it('Should display a rating component with correct rating score', () => {
    cy.get('[data-cy="course-rating"]').should('be.visible');
    cy.get('[aria-label="4 Stars"]');
  });
  it('Should display tags and those tags should be clickable, taking the user to a search page', () => {
    const tags = ['art', 'painting', 'beginners'];
    // prettier-ignore
    tags.forEach((item, index)=>{
          cy.get(`[data-cy="course-tutor-tags"] > :nth-child(${index +1}) > .MuiButton-root`).click()
          cy.url().should(`include`, `/search/${item}`).go("back");

      })
    it('Should display the label of "Days available" and the days should be highlighted darker if available', () => {
      cy.get('[data-cy="course-tutor-days-available"] > .subPageSubTitle')
        .should('be.visible')
        .contains('Days available');
    });
  });
});
