@orange
Feature: OrangeHRM Login and Admin Navigation

  Scenario: Login and check Admin records
    Given I navigate to OrangeHRM "https://opensource-demo.orangehrmlive.com"
    When I login with credentials "Admin" and "admin123"
    Then I am directed to Dashboard
    When I click on Admin button on Left
    Then I see Records Found on page
    And  Print the result displayed for Records Found.
    When I click on the Profile displayed on Right top corner of Screen
    Then I see About, Support, Change Password, Logout options.
    When I click on Logout.
    Then I am logged out and directed to the login Page.
