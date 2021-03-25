describe("Form app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  const nameInput = () => cy.get('input[name="name"]');
  const emailInput = () => cy.get('input[name="email"]');
  const passwordInput = () => cy.get('input[name="password"]');
  const tosInput = () => cy.get('input[name="tos"]');
  const submitButton = () => cy.get("#submitButton");

  it("sanity test to make sure that tests work", () => {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
  });

  it("running MVP tests", () => {
    nameInput().should("have.value", "");
    emailInput().should("have.value", "");
    passwordInput().should("have.value", "");

    nameInput().type("Cynthia Harrell");
    nameInput().should("have.value", "Cynthia Harrell");
    emailInput().type("ch@gmail.com");
    passwordInput().type("snake9001eater");

    tosInput().should("not.be.checked");
    submitButton().should("be.disabled");
  });
});
