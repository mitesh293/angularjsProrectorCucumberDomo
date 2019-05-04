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

    And I click the submit button
    Then I should see my "Mitesh" new task in the list


  Scenario Outline: Protractor and Cucumber Test with multiple
    Given I go to "http://localhost:8000/#!/adduser"
    When I add "<namme>" in the namee field
    When I add "<surname>" in the surname field
    When I add "<email>" in the email field
    When I add "<gender>" in the gender field

    And I click the submit button
    Then I should see my "<namme>" new task in the list

    Examples:
      | namme   | surname  | email              |gender|
      |Hardik |  faldu     |hardik@fal.com | male|