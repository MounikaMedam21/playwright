Feature: User Authentication Tests

  Background:
    Given User navigates to the test automation application
        And User clicks on the signin link


  Scenario: Login should be successful
    Given User enter the email for the email field as "Mounika.reddy_324@yopmail.com"
    Given User enter the password for the password filed as "Abcde@123"
    When User click on the signin button
    Then Login should be success

  Scenario: Login should not be successful with incorrect email
    Given User enter the incorrect email as "Mounika.reddy_4@yopmail.com"
    Given User enter the correct password as "Abcde@123"
    When User click on the submit button
    Then Login should fail user should get error message for emai fail


  Scenario: Login should not be successful with incorrect password
    Given User enter the correct email as "Mounika.reddy_324@yopmail.com"
    Given User enter the incorrect password as "Abcde@1287"
    When User click on the submit button
    Then Login should fail user should get error message

  Scenario: Login should not be successful with invalid details
    Given User enter the incorrect email as "Mounika.redyopmail.com"
    Given User enter the incorrect password as "Cbgfd@7hyt"
    When User click on the submit button
    Then Login should fail user should get the error message for invalid details