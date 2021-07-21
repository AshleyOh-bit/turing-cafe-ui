describe("Form input validation tests", () => {
    beforeEach(() => {
        cy.intercept(
            {
                method: "GET",
                url: "http://localhost:3001/api/v1/reservations"
            },
            {
                statusCode: 201,
                body: [{
                        date: "12/30",
                        id: 10,
                        name: "Tilde",
                        number: 55,
                        time: "9:00"
                }]
            })
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