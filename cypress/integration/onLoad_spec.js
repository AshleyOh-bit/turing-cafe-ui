// import { get } from "cypress/types/lodash";

describe("test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
    });

    it("should be able to visit the page and render title", () => {
        cy.visit("http://localhost:3000/")
        cy.get(".app-title")
            .contains("Turing Cafe Reservations")
    })
});