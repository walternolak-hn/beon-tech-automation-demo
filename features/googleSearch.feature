Feature: Google Search

  Scenario: As a user, I can search for something in google

    Given I am on the google page
    When I search for WebdriverIO
    Then I should see WebdriverIO results

  Scenario: As a user, I can go to the search result page once my search is done
    Given I am on the google page
    When I search for WebdriverIO
    And I enter the WebdriverIO search result
    Then I should see the WebdriverIO page
