/// <reference types="cypress" />
import SearchEngine from "../../support/POM/searchEngine";

describe('The search engine works properly with accurate results.', () => {
    beforeEach(() => { 
        cy.visit('');
        });

    it('The user searches for a product using a search engine.', () => {
        SearchEngine.search('Windsurfing')
        cy.get('#main').find('li')
            .should('have.length', 2)
            .and('contain.text', 'Windsurfing')
        })

    
    it('The user enters a product into the search engine that does not exist', () => {
        SearchEngine.search('Football')
        cy.get('.woocommerce-info')
            .should('be.visible')
            .and('contain.text', 'Nie znaleziono produktów, których szukasz.')

    });
    
});
