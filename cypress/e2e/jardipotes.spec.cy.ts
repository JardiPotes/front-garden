describe('Jardipotes home page', () => {
  it('loads successfully', () => {
    cy.visit('/');
    cy.get('[data-test-id="connexion_button"]').should(
      'contain.text',
      'CONNEXION',
    );
  });
});
describe('register, login, logout', () => {
  it('allows user to register', () => {
    cy.intercept('http://127.0.0.1:8000/api/auth/register').as('register');
    cy.intercept('http://127.0.0.1:8000/api/auth/login').as('login');
    cy.visit('/');
    cy.get('[data-test-id="register_button"]').click();
    cy.get('[data-test-id="register_email"]').type('test@test.fr');
    cy.get('[data-test-id="register_password"]').type('Test5003');
    cy.get('[data-test-id="register_nickname"]').type('Test');
    cy.get('[data-test-id="register_experience"]').first().check();
    cy.get('[data-test-id="register_submit"]').click();
    cy.wait('@register').its('response.statusCode').should('eq', 201);
    cy.wait('@login').then(({response}) => {
      cy.request(
        'DELETE',
        `http://127.0.0.1:8000/api/users/${response?.body.user.id}`,
      );
    });
  });
  it('shows error message when logins are wrong', () => {
    cy.intercept('http://127.0.0.1:8000/api/auth/login').as('login');
    cy.login('bla', 'bla');
    cy.wait('@login');
    cy.get('[data-test-id="connexion_error"]').should('contain.text', 'Oups');
  });
  it('allows user to login and redirects to profile page', () => {
    cy.intercept('http://127.0.0.1:8000/api/auth/login').as('login');
    cy.login(Cypress.env('login_id'), Cypress.env('password'));
    cy.wait('@login').its('response.statusCode').should('eq', 200);
    cy.url().should('match', /^http:\/\/localhost:5173\/profile/);
  });
  it('allows user to logout', () => {
    cy.intercept('http://127.0.0.1:8000/api/auth/login').as('login');
    cy.intercept('http://127.0.0.1:8000/api/**').as('api');
    cy.login(Cypress.env('login_id'), Cypress.env('password'));
    cy.wait('@login');
    cy.wait('@api');
    cy.get('[data-test-id="logout_button"]').click();
    cy.get('[data-test-id="connexion_button"]').should(
      'contain.text',
      'CONNEXION',
    );
  });
});
describe('garden page', () => {
  it('allows user to create garden', () => {
    cy.intercept('http://127.0.0.1:8000/api/auth/login').as('login');
    cy.intercept('POST', 'http://127.0.0.1:8000/api/gardens').as('garden');
    cy.login(Cypress.env('login_id'), Cypress.env('password'));
    cy.wait('@login');
    cy.get('[data-test-id="create_garden"]').click();
    cy.get('[data-test-id="create_garden_title"]').type('test');
    cy.get('[data-test-id="create_garden_description"]').type(
      'test description',
    );
    cy.get('[data-test-id="create_garden_zipcode"]').type('00000');
    cy.get('[data-test-id="create_garden_submit"]').click();
    cy.wait('@garden').then(({response}) => {
      cy.request({
        url: `http://127.0.0.1:8000/api/gardens/${response?.body?.id}`,
        method: 'DELETE',
        auth: {
          user: Cypress.env('login_id'),
          pass: Cypress.env('password'),
        },
      });
    });
  });
});
describe('user interactions', () => {
  it('allows user to look for a garden and contact user', () => {
    cy.intercept('http://127.0.0.1:8000/api/auth/login').as('login');
    cy.intercept('http://127.0.0.1:8000/api/**').as('api');
    cy.intercept(`http://127.0.0.1:8000/api/gardens?offset=0&zipcode=*`).as(
      'search',
    );
    cy.intercept(
      'POST',
      'http://127.0.0.1:8000/api/conversations?current_user_id=*',
    ).as('conv');
    cy.intercept('GET', 'http://127.0.0.1:8000/api/conversations/*').as(
      'load_conv',
    );
    cy.login(Cypress.env('login_id'), Cypress.env('password'));
    cy.wait('@login');
    cy.wait('@api');
    cy.get('[data-test-id="garden_link"]').click();
    cy.url().should('eq', 'http://localhost:5173/gardens');
    cy.get('[data-test-id="zipcode"]').type(Cypress.env('test_zipcode'));
    cy.get('[data-test-id="search_submit"]').click();
    cy.wait('@search').its('response.statusCode').should('eq', 200);
    cy.get('[data-test-id="garden_thumb"]').first().click();
    cy.url().should('match', /^http:\/\/localhost:5173\/profile/);
    cy.reload();
    cy.get('[data-test-id="message_me"]').click();
    cy.wait('@conv').its('response.statusCode').should('eq', 201);
    cy.url().should('match', /^http:\/\/localhost:5173\/messages/);
    cy.reload();
    cy.wait('@load_conv');
    cy.get('[data-test-id="no_message"]').should('be.visible');
    cy.get('#message_input').type('coucou');
    cy.get('[data-test-id="message_submit"]').click();
    cy.get('[data-test-id="message_content"]').should('contain.text', 'coucou');
    cy.wait('@load_conv').then(({response}) => {
      cy.request({
        method: 'DELETE',
        url: `http://127.0.0.1:8000/api/conversations/${response?.body?.id}?current_user_id=${response?.body?.chat_sender_id}`,
        auth: {
          user: Cypress.env('login_id'),
          pass: Cypress.env('password'),
        },
      });
    });
  });
});

export {};
