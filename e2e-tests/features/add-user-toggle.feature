#features/test.feature
Feature: Running Cucumber with Protractor
  As a user of Protractor
  I should be able to use Cucumber
  In order to run my E2E tests

 Scenario: Protractor and Cucumber Test
    Given I go to "http://localhost:8000/#!/adduser"
    When I add "Mitesh" in the namee field
    When I add "Patel" in the surname field
    When I add "pmitesh293@gmail.com" in the email field
    When I add "male" in the gender field
    When I click the "toggleModel" toggle button

    And I click the submit button
    Then I should see my "Mitesh" new task in the list

