describe("Making a reservation using the form", () => {
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

    it("should be able to make a reservation", () => {
        cy.get("#nameInput")
            .type("JJ")
            .should("have.value", "JJ")
        cy.get("#dateInput")
            .type("12/9")
            .should("have.value", "12/9")
        cy.get("#timeInput")
            .type("2:05")
            .should("have.value", "2:05")
        cy.get("#numberInput")
            .type("66")
            .should("have.value", "66")
        cy.get("button")
            .contains("Make Reservation")
            .click()
        cy.get(".card")
            .should("have.length", 2)
    })

});