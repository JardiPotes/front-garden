describe("Jardipotes home page", () => {
  it("loads successfully", () => {
    cy.visit("/");
    cy.get('[data-test-id="connexion_button"]').should(
      "contain.text",
      "CONNEXION"
    );
  });
  it("allows user to register", () => {
    cy.intercept("http://127.0.0.1:8000/api/auth/register").as("register");
    cy.intercept("http://127.0.0.1:8000/api/auth/login").as("login");
    cy.visit("/");
    cy.get('[data-test-id="register_button"]').click();
    cy.get('[data-test-id="register_email"]').type("test@test.fr");
    cy.get('[data-test-id="register_password"]').type("Test5003");
    cy.get('[data-test-id="register_nickname"]').type("Test");
    cy.get('[data-test-id="register_experience"]').first().check();
    cy.get('[data-test-id="register_submit"]').click();
    cy.wait("@register").its("response.statusCode").should("eq", 201);
    cy.wait("@login");
  });
  it("shows error message when logins are wrong", () => {
    cy.intercept("http://127.0.0.1:8000/api/auth/login").as("login");
    cy.login("bla", "bla");
    cy.wait("@login");
    cy.get('[data-test-id="connexion_error"]').should("contain.text", "Oups");
  });
  it("allows user to connect and redirects to profile page", () => {
    cy.intercept("http://127.0.0.1:8000/api/auth/login").as("login");
    cy.login(Cypress.env("login_id"), Cypress.env("password"));
    cy.wait("@login");
    cy.url().should("eq", "http://localhost:5173/profile/17");
  });
  it("allows user to logout", () => {
    cy.intercept("http://127.0.0.1:8000/api/auth/login").as("login");
    cy.intercept("http://127.0.0.1:8000/api/**").as("api");
    cy.login(Cypress.env("login_id"), Cypress.env("password"));
    cy.wait("@login");
    cy.wait("@api");
    cy.get('[data-test-id="logout_button"]').click();
    cy.get('[data-test-id="connexion_button"]').should(
      "contain.text",
      "CONNEXION"
    );
  });
});
//   TO-DO :
//   check auth token cookie
//   log out
//   create garden
//   garden page + search
//   send message
//   create github ci script
