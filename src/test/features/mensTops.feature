Feature: Change Color of Selected Product

  Scenario: User selects a product from Men's Top section and changes its color
    Given User navigate to the automation application
    When User selects the "Men's Top" section
    When User selects the "Tops" option
    And User selects the any one product from the list
    And User changes the color of the product to "Blue"