describe('Site Google.com', () => {

  //Test verificare continut input
  it('verific o valoare din input', () => {
      cy.visit('https://google.com');
      cy.get('#L2AGLb').click();

      const googleSearch = cy.get('.gLFyf');

      googleSearch.type('123');
      googleSearch.should('have.value', '123');
      
  })

})