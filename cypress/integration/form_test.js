describe("testing our form inputs", ()=>{
    it("visits the URL", ()=>{
        cy.visit("http://localhost:3000/pizza");
    })
    it("testing: ", ()=>{
        cy.get('[for="name"] > input')
          .type("Mohammad Miah")
          .should("have.value", "Mohammad Miah")

        cy.get('[for="red"] > input')
          .check()
          .should("be.checked")

        cy.get('[for="chicken"] > input')
            .check()
            .should("be.checked")

        cy.get('[for="pepperoni"] > input')
          .check()
          .should("be.checked")

        cy.get('textarea')
          .type("I love pizza")
          .should("have.value", "I love pizza")

        cy.get('form').submit()
    })
    
})