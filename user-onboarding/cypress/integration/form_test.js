describe("Form app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  const nameInput = () => cy.get('input[name="name"]');
  const emailInput = () => cy.get('input[name="email"]');
  const passwordInput = () => cy.get('input[name="password"]');
  const tosInput = () => cy.get('input[name="tos"]');
  const submitButton = () => cy.get("#submitButton");
  const nameErrors = () => cy.get("#nameErrors");
  const emailErrors = () => cy.get("#emailErrors");
  const passwordErrors = () => cy.get("#passwordErrors");
  const tosErrors = () => cy.get("#tosErrors");

  it("sanity test to make sure that tests work", () => {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
  });

  it("check all validation error messages and ensure the submit button is enabled/disabled properly", () => {
    // ensuring we're working with a blank slate
    nameInput().should("have.value", "");
    emailInput().should("have.value", "");
    passwordInput().should("have.value", "");
    tosInput().should("not.be.checked");

    // checking that the submit button is functioning as expected
    submitButton().should("be.disabled");

    // inputing data to satisfy all field requirements
    nameInput().type("Cynthia Harrell");
    nameInput().should("have.value", "Cynthia Harrell");
    emailInput().type("ch@gmail.com");
    emailInput().should("have.value", "ch@gmail.com");
    passwordInput().type("snake9001eater");
    passwordInput().should("have.value", "snake9001eater");
    tosInput().check();
    tosInput().should("be.checked");

    // checking that the submit button is functioning as expected
    submitButton().should("not.be.disabled");

    // clearing all fields to begin proccing the error messages
    nameInput().type("{selectall}{backspace}");
    emailInput().type("{selectall}{backspace}");
    passwordInput().type("{selectall}{backspace}");
    tosInput().uncheck();

    // checking several procced error messages
    nameErrors().should("have.text", "name is required");
    emailErrors().should("have.text", "email is required");
    passwordErrors().should("have.text", "password is required");
    tosErrors().should("have.text", "please agree to the TOS");

    // triggering the remaining error messages
    emailInput().type("ch");
    emailInput().should("have.value", "ch");
    passwordInput().type("snake");
    passwordInput().should("have.value", "snake");

    // checking remaining procced error messages
    emailErrors().should("have.text", "must be a valid email");
    passwordErrors().should("have.text", "password must be 8 chars long");

    // clearing remaining fields to return to initial blank slate
    emailInput().type("{selectall}{backspace}");
    passwordInput().type("{selectall}{backspace}");

    // ensuring that we've returned to our blank slate
    nameInput().should("have.value", "");
    emailInput().should("have.value", "");
    passwordInput().should("have.value", "");
    tosInput().should("not.be.checked");

    // checking that the submit button is functioning as expected
    submitButton().should("be.disabled");
  });
});
