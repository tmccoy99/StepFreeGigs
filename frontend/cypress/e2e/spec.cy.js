describe('template spec', () => {
  it('displays a search screen on loading', () => {
    cy.visit('http://localhost:19006/');
    cy.get('[data-testID="SearchScreen"').should('exist');
  });

  it('displays a button to find events', () => {
    cy.visit('http://localhost:19006/');
    cy.get('[data-testID="search-button"').should('exist');
  });

  // it('sends a request to the back-end on button press', () => {
  //   cy.visit('http://localhost:19006/');
  //   cy.intercept('GET', '/events' () => {

  //   })
  //   cy.get('[data-testID="search-button"').click();

  // });
});
