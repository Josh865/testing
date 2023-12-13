/// <reference types="cypress" />

describe("eeds public pages", () => {
  beforeEach(() => {
    cy.visit("https://www.eeds.com");
  });

  it("displays the healthcare professionals page", () => {
    cy.get("h2").contains("Earn and Report your CE Credits Effortlessly");
  });

  it("displays the education sponsors page", () => {
    cy.get("#EP_Tab a").click();

    cy.get("h2").contains("CE Tracking Made Quick and Easy");
  });
});
