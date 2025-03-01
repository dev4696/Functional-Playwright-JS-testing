Feature: Search for a Board Game on BGG

  Scenario: Search for a specific board game
    Given I navigate to BGG site
    When I fill in the Title field with "Harry Potter and the Sorcerer's Stone Trivia Game"
    And I fill in the Year Published Minimum field with "1999"
    And I fill in the Year Published Maximum field with "2000"
    And I select "15 minutes" from the Min Playing Time drop down
    And I select "1.5 hours" from the Max Playing Time drop down
    And Clicking Submit takes me to a new page
    And I see and Print the name of the link displayed
    
