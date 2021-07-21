describe("test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
    });

    it("should be able to visit the page and render title", () => {
        cy.visit("http://localhost:3000/")
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
            .click()
    })

    it("should display 9 reservation cards on load", () => {
        cy.get(".card")
            .should("have.length", 9)
    })
});