const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://fakestore.testelka.pl/',
    chromeWebSecurity: false,

  setupNodeEvents(on, config) {
  
    },
  },
});
