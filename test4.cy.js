describe('Site Google.com', () => {

  //Test cu delay
  it('asteapta 10 secunde', () => {
      cy.visit('https://google.com');
      cy.get('#L2AGLb').click();

      cy.wait(10000);

      cy.get('.gLFyf').type('Au trecut 10 secunde');

      cy.get('.gLFyf').type('{enter}');
      
  })

})