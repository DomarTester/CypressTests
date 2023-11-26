/// <reference types="cypress" />

describe('When page initially loaded', () => {
    beforeEach(() => { 
        cy.visit('');
        });

    it('the correct page with the appropriate header is displayed ', () => {
        cy.url().should('include', 'fakestore.testelka.pl')
        cy.get('.custom-logo').should('be.visible')
        cy.get('.custom-logo').invoke('attr', 'alt').then(title => {
            cy.wrap(title).should('contain', 'FakeStore')
        })
    
    });

    it('the proper message is displayed', () => {
        cy.get('.woocommerce-store-notice')
         .should('be.visible')
         .and('contain.text', 'To jest wersja demonstracyjna sklepu do celów testowych— Zamówienia nie będą realizowane.')
        
    }); 

    it('the user hides the demo version message ', () => {
        cy.get('.woocommerce-store-notice__dismiss-link').click()
        cy.get('.woocommerce-store-notice')
        .should('not.be.visible')

    });
});
