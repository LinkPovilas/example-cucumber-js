Feature: Authentication

  Background:
    Given I navigate to the landing page

  Scenario: Username is required to log in
    When I click the login button
    Then I should see an error message saying "Username is required"

  Scenario: Password is required
    Given I enter the username "standard_user"
    When I click the login button
    Then I should see an error message saying "Password is required"

  Scenario: Standard user login
    When I login as "standard_user"
    Then I should be redirected to the inventory page

  Scenario: Locked out user cannot login
    When I login as "locked_out_user"
    Then I should see an error message saying "Sorry, this user has been locked out"
