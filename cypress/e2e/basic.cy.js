describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("opens the index page", () => {
    cy.get("h1").contains("Great coffee with a conscience");
  });

  it("navigates to the work page", () => {
    cy.get('a[href="/work"]').eq(0).click();
    cy.url().should("include", "/work");
    cy.get("h1").contains(/Our Coffee/i);
  });

  it("navigates to the about page", () => {
    cy.get('a[href="/about"]').eq(0).click();
    cy.url().should("include", "/about");
    cy.get("h1").contains(/Values/i);
  });

  it("navigates to the blog page", () => {
    cy.get('a[href="/post"]').eq(0).click();
    cy.url().should("include", "/post");
    cy.get("h1").contains(/Latest Stories/i);
  });
});

describe("validate blog", () => {
  it("should have only 3 blog posts by default", () => {
    cy.visit("/post");
    cy.get("ul#blog-list li").should("have.length", 3);
  });
});
