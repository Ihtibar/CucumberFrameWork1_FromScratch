@Regression @User1
Feature: Testing Logins

  @Smoke
  Scenario Outline: Testing Gmail Logins

    When go to 'https://www.gmail.com'website
    And User enters '<UserName>' and '<PassWord>'
    Then title should contain 'ent'


    Examples:
      |UserName            | PassWord  |
      | entizar@gmail.com   | bkbsabsak |
      | entizar@gmail.com   |  3637488 |
      | entizar@gmail.com    |xinda1990|

