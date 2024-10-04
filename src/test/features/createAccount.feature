Feature: Create an Account

  Background: 
    Given User navigates to the application
    And User clicks on the create an account link

  Scenario: Create an Account with valid details
    Given User enters the first name as "Mouni"
    And User enters the last name as "Medm"   
    And User enters the email as "mounika.medam_344@yopmail.com"
    And User enters the password as "Abcdo@123"
    And User enters the confirm password as "Abcdo@123"
    When User clicks on the create an account button
    Then User should redirect to the account page