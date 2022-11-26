describe('empty spec', () => {
  it('passes', () => {
    cy.viewport(1536, 960);
    cy.visit('https://buger-eats-qa.vercel.app');
    cy.get('#page-home main h1')
      .should('have.text', 'Seja um parceiro entregador pela Buger Eats')
  })
})