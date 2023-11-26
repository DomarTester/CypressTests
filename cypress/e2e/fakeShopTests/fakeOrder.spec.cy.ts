/// <reference types="cypress" />

describe('E2E-The process of buying a product without entering the card number.', () => {

    it('The user places an order and pays.', () => {
        cy.visit('');
        //The user goes to the store's subpage
        cy.get('#menu-item-198').click()
        cy.url().should('include', 'shop')
        cy.get('#main h1').should('contain.text', 'Sklep')

        //The user selects the category "Wspinaczka"
        cy.contains('h2', 'Wspinaczka').click();
        cy.url().should('include', 'wspinaczka')
        cy.get('#main h1').should('contain.text', 'Wspinaczka')

        //The user selects a product and adds it to the cart
        cy.get('a[aria-label="Dodaj „Grań Kościelców” do koszyka"]').click();
        cy.get('span.count').should('contain.text', '1 Produkt')


        //The user goes to the cart
        cy.get('a.cart-contents[title="Zobacz zawartość koszyka"').click();
        cy.url().should('include', 'koszyk')
        cy.get('#main h1').should('contain.text', 'Koszyk')
        cy.contains('Grań Kościelców').should('be.visible')

        //The user proceeded to payment, fill the form but not provides the card number
        cy.contains('Przejdź do płatności').click()
        cy.get('#billing_first_name').type('Tester')
        cy.get('#billing_last_name').type('Kowalski')
        cy.get('#billing_address_1').type('Testowa')
        cy.get('#billing_postcode').type('11-111')
        cy.get('#billing_city').type('Warszawa')
        cy.get('#billing_phone').type('123456789')
        cy.get('#billing_email').type('testowy@gmail.com')
        cy.get('#terms').check()
        cy.get('#place_order').click()
        cy.get('.woocommerce_error').should('be.visible').and('contain.text', 'Numer karty jest niekompletny.')
    });
    });
