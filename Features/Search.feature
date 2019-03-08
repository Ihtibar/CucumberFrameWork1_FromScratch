@Regression @User2

Feature: Testing searches
  Background: setup
    Given Environment ready
  @Smoke
  Scenario Template: Scenario Template:  Google Search

    When go to 'https://www.google.com' website
    Then Enter '<Products>' in search box
    And Close browser



  Examples:
    | Products |
    | apple    |
    | yangyu   |
    | iphone   |
    | Rayisa   |









   @amazon
  Scenario Outline: xxxxx
    When go to 'https://www.amazon.com' website
    And enter "<Products>" in the new Search box
    * Close Browser
    Examples:
      | Products |
      | apple    |
      | yagyu    |
      | iphone   |
      | Rayisa   |

