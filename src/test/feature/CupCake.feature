@cake
Feature: Cupcake Ipsum Generator

  Scenario: Generate Cupcake Ipsum text
    Given I navigate to the Cupcake Ipsum website "http://www.cupcakeipsum.com"
    When I see "Cupcake Ipsum - Sugar-coated Lorem Ipsum Generator"
    Then I see Paragraphs has "5" filled in
    When I select "Short" radio button
    Then I check Start with Cupcake ipsum dolor sit amet
    Then I see 1 instance of Cupcake ipsum dolor sit amet on the page
    Then I do not see a "Copy to Clipboard" button
    When I click Generate
    Then I see 2 instances of Cupcake ipsum dolor sit amet on the page
