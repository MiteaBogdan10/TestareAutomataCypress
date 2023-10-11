describe('Exemplu unde', () => {

  //Test verificare signup daca functioneaza corect
  it('verific signup daca functioneaza corect', () => {
      cy.visit('https://ro.pinterest.com/');
      cy.get('[data-test-id="simple-signup-button"] > .oRi > .RCK').click();
      cy.get('#email').type('bogdan@gmail.com');
      cy.get('#password').type('123456');
      cy.get('#birthdate').type('1999-07-21');
      cy.get('.red').click();
      cy.get('.Jea > .oRi > .RCK').click();
  })

})