describe("test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
    });

    it("should be able to type into form and see typed value inside input", () => {
        cy.get("#nameInput")
            .type("Rushka")
            .should("have.value", "Rushka")
        cy.get("#dateInput")
            .type("12/5")
            .should("have.value", "12/5")
        cy.get("#timeInput")
            .type("1:05")
            .should("have.value", "1:05")
        cy.get("#numberInput")
            .type("44")
            .should("have.value", "44")
        cy.get("button")
            .contains("Make Reservation")
            .click()
    })

});