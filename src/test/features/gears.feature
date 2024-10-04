Feature: Gears product page

  Scenario: User selects a product and verifies details in the cart
    Given User navigates to the demo test automation application
    When User selects the gears
    When User selects the product
    When User selects the Customize and Add to Cart option
    When User selects the "Sprite Stasis Ball 65 cm" ball radio button
    When User selects the "Sprite Yoga Strap 8 foot" radio button
    When User clicks on the add to cart
    When User clicks on the my cart option
    When User clicks on the view to edit cart button
    Then verify the selected product price "$68.00"
