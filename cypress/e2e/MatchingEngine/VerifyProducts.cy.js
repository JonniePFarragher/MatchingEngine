/// <reference types="cypress" />

describe('Automation Technical Assessment', () => {
  it('Validates list of supported products on Matching Engine', () => {

    cy.viewport(1280, 720);

    // Step 1: Visit the website
    cy.visit('https://www.matchingengine.com/');

    // Step 2: Click ‘Modules’ in the header section
    cy.get('#navMenu').should('be.visible');
    cy.get('a.navbar-link').contains('Modules').click();

    // Step 3: Click ‘Repertoire Management Module’ from the menu
    cy.contains('span.vc_tta-title-text', 'Repertoire Management').click();
    cy.get('a[title="Repertoire Management Module"]').click();

    // Step 4: Scroll to the ‘Additional Features’ section
    cy.contains('h2.vc_custom_heading', 'Additional Features').scrollIntoView();

    // Step 5: Click ‘Products Supported’
    cy.contains('Products Supported').click();

    // Step 6: Assert on the list of supported products
    cy.contains('There are several types of Product Supported:')
      .scrollIntoView();

    const expectedProducts = [
      'Cue Sheet / AV Work',
      'Recording',
      'Bundle',
      'Advertisement'
    ];

    expectedProducts.forEach((expectedProduct) => {
      cy.get('span')
        .contains(expectedProduct)
        .invoke('text') 
        .then((text) => {
          // Remove any unwanted spaces like '&nbsp;' and trim the text
          const cleanedText = text.replace(/\u00A0/g, '').trim(); // '\u00A0' is the Unicode for '&nbsp;'

          // Assert that the cleaned text matches the expected product name
          expect(cleanedText).to.eq(expectedProduct);
        });
    });
  });
});