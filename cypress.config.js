const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "43oh6s",
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
