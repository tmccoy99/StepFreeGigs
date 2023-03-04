describe('template spec', () => {
  it('displays a search screen on loading', () => {
    cy.visit('http://localhost:19006/');
    cy.get('[data-testID="SearchScreen"]').should('exist');
  });

  it('displays a button to find events', () => {
    cy.visit('http://localhost:19006/');
    cy.get('[data-testID="search-button"]').should('exist');
  });

  it('sends a request to the back-end on button press', () => {
    cy.visit('http://localhost:19006/');
    const latlong = '51.4919120,-0.1692555';
    const radius = '5';
    cy.intercept(
      'GET',
      `http://localhost:3000/events?latlong=${latlong}&radius=${radius}`,
      (req) => {
        req.reply({ statusCode: 200, accessibleEvents: [] });
      }
    ).as('event-query');
    cy.get('[data-testID="search-button"]').click();
    cy.wait('@event-query');
  });
});
