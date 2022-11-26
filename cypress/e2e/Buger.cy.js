describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://buger-eats-qa.vercel.app');
    cy.get('#page-home main h1')
      .should('have.text', 'Seja um parceiro entregador pela Buger Eats')
  })
})