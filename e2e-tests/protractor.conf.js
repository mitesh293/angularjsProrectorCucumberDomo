//jshint strict: false
exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    'add-user-spec.js'
  ],

  capabilities: {
    browserName: 'chrome'
  },

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  highlightDelay: 1000,
  directConnect: false,
  onPrepare: function () {
    browser.manage().window().maximize(); // maximize the browser before executing the feature files
  }
};
