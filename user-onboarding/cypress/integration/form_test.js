// write tests here
describe("Form app", () => {
  beforeEach(() => {
    // arbitrary code you want running before your tests start
    cy.visit("http://localhost:3000/");
  });

  it("sanity test to make sure that tests work", () => {
    // false positive
    // 'expect' is an assertion
    // there can be many assertions per test
    // though inside the it statement (the test itself) usually
    // those assertions are logically grouped together
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
  });
});
