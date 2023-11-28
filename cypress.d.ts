/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      getIframe(iframe: string): Chainable<unknown>;
    }
  }