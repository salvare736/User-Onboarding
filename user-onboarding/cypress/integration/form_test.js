describe("Form app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  const nameInput = () => cy.get('input[name="name"]');
  const emailInput = () => cy.get('input[name="email"]');
  const passwordInput = () => cy.get('input[name="password"]');

  it("sanity test to make sure that tests work", () => {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
  });

  it("fill out the text input fields", () => {
    nameInput().type("Cynthia Harrell");
    nameInput().should("have.value", "Cynthia Harrell");
    emailInput().type("ch@gmail.com");
    passwordInput().type("snake9001eater");
  });
});
