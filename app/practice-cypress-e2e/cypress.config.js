const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fixturesFolder: './cypress/fixtures',
  e2e: {
    specPattern: './cypress/integration',
    supportFile: '',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
