Feature: Login functionality

  Scenario Outline: User is able to log in successfully with valid credentials
    Given I am on the login page
    When I enter the username "<username>"
    And I enter the password "secret_sauce"
    And I click the login button

    Examples:
      | username                |
      | standard_user           |
      | locked_out_user         |
      | problem_user            |
      | error_user              |
      | visual_user             |
