Feature: Order

  Background:
    Given I open '$url' url

  Scenario: Simple Order
    When I click 'Header > #Products in Navigations'
    And I save text of 'All Products > #Mod in Products > Price' as 'price'
    And I click 'All Products > #Mod in Products'
    And I click 'Product > Add To Cart'
    And I click 'Header > Cart'
    And I expect text of 'Cart > #1 of Products > Title' to equal 'BlackMod'
    And I click 'Cart > Checkout'
    And I type 'Test Automation' to 'Checkout > Full Name'
    And I type 'testautomation@email.com' to 'Checkout > Email'
    And I click 'Checkout > Enter Address Manually'

    And I type 'Test' to 'Checkout > First Name'
    And I type 'Automation' to 'Checkout > Last Name'
    And I type 'TA Street' to 'Checkout > Address Line 1'
    And I type 'TA Building' to 'Checkout > Address Line 2'
    And I type 'New York' to 'Checkout > City'
    And I type 'New York' to 'Checkout > County'
    And I type '10001' to 'Checkout > Post Code'
    And I type 'USA' to 'Checkout > Country'

    And I click 'Checkout > Continue To Payment'

    And I switch to 'Checkout > Card Frame' frame
    And I type '$card.number' to 'Checkout > Card Number'
    And I type '$card.expiryDate' to 'Checkout > Expiry Date'
    And I type '$card.cvc' to 'Checkout > CVC'
    And I switch to parent frame

    And I expect text of 'Checkout > Confirm And Pay' to equal 'Confirm and Pay {$price}'
    And I click 'Checkout > Confirm And Pay'

    And I expect text of 'Order Completed > Order ID' to match '[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}'

  Scenario: Apply promo code on checkout
    When I click 'Header > #Products in Navigations'
    And I save text of 'All Products > #Green Mod in Products > Price' as 'price'
    And I click 'All Products > #Green Mod in Products'
    And I click 'Product > Add To Cart'
    And I click 'Header > Cart'
    And I expect text of 'Cart > #1 of Products > Title' to equal 'Green Mod'
    And I click 'Cart > Checkout'
    And I type 'Test Automation' to 'Checkout > Full Name'
    And I type 'testautomation@email.com' to 'Checkout > Email'
    And I click 'Checkout > Enter Address Manually'

    And I type 'Test' to 'Checkout > First Name'
    And I type 'Automation' to 'Checkout > Last Name'
    And I type 'TA Street' to 'Checkout > Address Line 1'
    And I type 'TA Building' to 'Checkout > Address Line 2'
    And I type 'New York' to 'Checkout > City'
    And I type 'New York' to 'Checkout > County'
    And I type '10001' to 'Checkout > Post Code'
    And I type 'USA' to 'Checkout > Country'

    And I expect text of 'Checkout > Subtotal' to equal '$price'
    And I save '$applyPromo($price, 50)' to memory as 'promoAppliedPrice'
    And I type 'SAVE50' to 'Checkout > Promo Code'
    And I click 'Checkout > Add Promo Code'
    And I wait until text of 'Checkout > Subtotal' to equal '$promoAppliedPrice'

    And I click 'Checkout > Continue To Payment'

    And I switch to 'Checkout > Card Frame' frame
    And I type '$card.number' to 'Checkout > Card Number'
    And I type '$card.expiryDate' to 'Checkout > Expiry Date'
    And I type '$card.cvc' to 'Checkout > CVC'
    And I switch to parent frame

    And I expect text of 'Checkout > Confirm And Pay' to equal 'Confirm and Pay {$promoAppliedPrice}'
    And I click 'Checkout > Confirm And Pay'

    And I expect text of 'Order Completed > Order ID' to match '[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}'

  Scenario: Simple Order (expected to fail)
    When I click 'Header > #Products in Navigations'
    And I save text of 'All Products > #Mod in Products > Price' as 'price'
    And I click 'All Products > #Mod in Products'
    And I click 'Product > Add To Cart'
    And I click 'Header > Cart'
    And I expect text of 'Cart > #1 of Products > Title' to equal 'RedMod'
