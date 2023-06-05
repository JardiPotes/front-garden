describe("Jardipotes home page", () => {
  it("loads successfully", () => {
    cy.visit("/");
    cy.get('[data-test-id="connexion_button"]').should(
      "contain.text",
      "CONNEXION"
    );
    cy.get('[data-test-id="connexion_button"]').click();
  });
  it("allow user to register", () => {});
  it("shows error message when logins are wrong", () => {
    cy.login("bla", "bla");
    cy.get('[data-test-id="connexion_error"]').should("contain.text", "Oups");
  });
  it("allows user to connect and redirects to profile page", () => {
    cy.login("vic@test.com", "Test300591");
    cy.url().should("eq", "http://localhost:5173/profile/17");
  });
});
//   TO-DO :
//   create account + invalid account
//   check auth token cookie
//   log out
//   create garden
//   garden page + search
//   send message
//   create github ci script
