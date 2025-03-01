module.exports = {
  default: {
    format: [
      "json:reports/cucumber.json",
      "html:reports/cucumber-report.html",
      "progress-bar"
    ],
    formatOptions: {
      snippetInterface: "async-await"
    },
    paths: ["src/test/feature/**/*.feature"], // Feature file path
    require: ["src/test/steps/**/*.js", "src/test/support/**/*.js"] // Step definition file path
  }
};
