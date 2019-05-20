exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': 'chrome'
    },

    // Spec patterns are relative to this directory.
    specs: [
        'features/*-toggle.feature'
    ],

    baseURL: 'http://localhost:8000/',

    cucumberOpts: {
        require: 'features/step_definitions/stepDefinitions.js',
        tags: false,
        format: [],
        profile: false,
        'no-source': true
    },
    highlightDelay: 1000,
    directConnect: false,

    onPrepare: function () {
        browser.manage().window().maximize(); // maximize the browser before executing the feature files
    }
};