describe("test", () => {
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

    it("should be able to visit the page and render title", () => {
        cy.get(".app-title")
            .contains("Turing Cafe Reservations")
    })

    it("should render a form with four text inputs and a button", () => {
        cy.get("form")
            .contains("Make a Reservation")
        cy.get('input[type="text"]')
            .should("have.length", 4)
        cy.get("#nameInput")
            .should("have.attr", "placeholder", "Name")
        cy.get("#dateInput")
            .should("have.attr", "placeholder", "Date")
        cy.get("#timeInput")
            .should("have.attr", "placeholder", "Time")
        cy.get("#numberInput")
            .should("have.attr", "placeholder", "Number")
        cy.get("button")
            .contains("Make Reservation")
    })

    it("should display 1 reservation card on load", () => {
        cy.get(".card")
            .should("have.length", 1)
    })

    it("should show cards that contain user information", () => {
        cy.get(".card")
            .get("h2").contains("Tilde")
            .get("h3").contains("12/30")
            .get("h4").contains("9:00")
            .get("h4").contains("55")
    })
});