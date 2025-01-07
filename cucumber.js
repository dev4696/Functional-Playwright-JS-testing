module.exports = {
    default: {
      formatOptions: {
        snippetInterface: "async-await"
      },
      paths: ["src/test/feature/**/*.feature"], // Feature file path
      require: ["src/test/steps/**/*.js"] // Step definition file path
    }
  };
  