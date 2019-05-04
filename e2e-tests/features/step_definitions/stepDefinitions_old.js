module.exports = function() {

    this.Given(/^I go to "([^"]*)"$/, function (site, callback) {
        browser.get(site)
            .then(callback);
    });
    this.When(/^I add "([^"]*)" in the namee field$/, function(task) {
        element(by.model('name')).sendKeys(task);
    });
    this.When(/^I add "([^"]*)" in the surname field$/, function(task) {
        element(by.model('surname')).sendKeys(task);
    });
    this.When(/^I add "([^"]*)" in the email field$/, function(task) {
        element(by.model('email')).sendKeys(task);
    });
    this.When(/^I add "([^"]*)" in the gender field$/, function(task) {
       if(task.equal("male"))
       {element(by.id('male')).click();}
       else
       {element(by.id('female')).click();}
    });

    this.When(/^I click the submit button$/, function() {
        element(by.id('submit')).click();
    });

    this.Then(/^I should see my new task in the list$/,{timeout: 30 * 1000}, function(callback) {
        var history = element.all(by.repeater('user in userList'));
        expect(history.count()).toEqual(3);
        expect(history.get(2).getText()).to.eventually.equal('mitesh')
            .and.notify(callback);

    });

}