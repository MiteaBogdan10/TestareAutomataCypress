describe('Exemplu unde', () => {

  //Test verificare login cu user si parola gresita(verificare mesaj eroare)
  it('verific login cu user sau parola gresita', () => {
      cy.visit('https://ro.pinterest.com/');
      cy.get('.wc1 > .oRi > .RCK').click();
      cy.get('#email').type('bogdan@gmail.com');
      cy.get('#password').type('123456');
      cy.get('.red').click();
      cy.get('.A6h > :nth-child(2)').should('exist');
  })
  
})