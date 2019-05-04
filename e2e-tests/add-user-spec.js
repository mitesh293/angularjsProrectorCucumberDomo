describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
        var history = element.all(by.repeater('user in userList'));

        browser.get('http://localhost:8000/#!/adduser');
        expect(browser.getTitle()).toEqual('My AngularJS App');

        element(by.model('name')).sendKeys('Mitesh');
        element(by.model('surname')).sendKeys('Patel');
        element(by.model('email')).sendKeys('pmitesh293@gmail.com');
        element(by.id('male')).click();

        element(by.id('submit')).click();

        expect(history.count()).toEqual(3);
        browser.sleep(3000);
    });
});
