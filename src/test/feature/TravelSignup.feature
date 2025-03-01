@travel
Feature: Travel Signup Form Validation
  Scenario: Fill out the signup form and verify redirection
    Given I navigate to signup site
    Then I see a complete signup form at the bottom of the page
    And I select "mr" from the "Title" radio selection
    And I fill in the "First name" field with "John"
    And I fill in the "Last name" field with "Smith"
    And I fill in the "Email" field with "john.smith@test.com"
    And I fill in the "Phone number" field with "555-5555"
    And I fill in the "Password" field with "password"
    And I fill in the "Confirm your password" field with "password"
    And I select "United States" from the "Country" dropdown
    And I check off "I agree to the terms and conditions"
    When I click "Sign Up"
    Then I am redirected to "https://marksheet.io/signup" with a 403 error