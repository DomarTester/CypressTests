class SearchEngine {
    get searching() {
        return cy.get('#woocommerce-product-search-field-0');
    }
search(product) {
    this.searching.type(`${product}{enter}`)
        cy.url().should('include', `${product}`)
        cy.get('#main h1').should('contain.text', `${product}`)
}


}

export default new SearchEngine();