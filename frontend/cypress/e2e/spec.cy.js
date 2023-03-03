describe('template spec', () => {
  it('displays a search screen on loading', () => {
    cy.visit('http://localhost:19006/');
    cy.get('[data-testID="SearchScreen"').should('exist');
  });
});
