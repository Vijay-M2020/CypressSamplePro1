const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "erzizp",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      qaURL: "https://rahulshettyacademy.com",
      preProdURL: ""
    },
    specPattern: 'cypress/integration/examples/*.js',
    defaultCommandTimeout: 6000
  },
  retries: {
    runMode: 1
    },
});
