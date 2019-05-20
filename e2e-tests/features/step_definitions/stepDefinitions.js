var {Given} = require('cucumber');
var {When,Then} = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

    Given(/^I go to "([^"]*)"$/, {timeout: 100000}, function (site) {
        return browser.get(site);
    });

    When(/^I add "([^"]*)" in the namee field$/,{timeout: 100000}, function (task) {
        return element(by.model('name')).sendKeys(task);
    });

    When(/^I add "([^"]*)" in the surname field$/,{timeout: 100000}, function (task) {
        return element(by.model('surname')).sendKeys(task);
    });

    When(/^I add "([^"]*)" in the email field$/,{timeout: 10000}, function (task) {
        return element(by.model('email')).sendKeys(task);
    });

    When(/^I add "([^"]*)" in the gender field$/,{timeout: 100000}, function (task) {
        if (task === "male") {
            return element(by.id('male')).click();
        } else {
            return element(by.id('female')).click();
        }
    });

    When(/^I click the submit button$/,{timeout: 100000}, function() {
       return element(by.id('submit')).click();
    });

    When(/^I click the "([^"]*)" toggle button$/,{timeout: 100000}, function(task) {
        var toggleButton = element(by.id('togglechkid'));
        browser.sleep(1000);
        toggleButton.click();
        browser.sleep(1000);
        toggleButton.click();
        browser.sleep(1000);
        return toggleButton.click();
    });


    Then(/^I should see my "([^"]*)" new task in the list$/,{timeout: 100000}, function(task) {
        var userList = element.all(by.repeater('user in userList'));
        expect(userList.count()).to.eventually.equal(3);
        browser.sleep(5000);
        if(task === "Mitesh")
            return expect(userList.get(2).getText()).to.eventually.equal('Mitesh Patel pmitesh293@gmail.com Male')
        else
            return expect(userList.get(2).getText()).to.eventually.equal('Hardik faldu hardik@fal.com Male');
    });
