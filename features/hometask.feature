Feature: Perform e2e testing on Saucedemo website

    Scenario: As a user I can log into the website
    Given I am on the login page
    When I login with <username> and <password> 

    Examples:
        | username      | password     |
        | standard_user | secret_sauce |

    
    Scenario: As a user I can add 2 products and navigate to cart
    Given I am on products page 
    When I add 2 products in cart 
    Then Navigate to cart and verify price

    Scenario: As a user I can remove item from cart and proceed to checkout 
    Given I am on cart page 
    When I remove a product from cart 
    Then I Navigate to details page

    Scenario: As a user I am able to add details 
    Given I am details page
    When I add the details on the page 
    Then I Navigate to checkout

    Scenario: On checkout page i verify the price and finsh
    Given  I am checkOut Page 
    When I verify the price of the item 
    Then I finish and checkout finally 

    Scenario: As a user i should be able to opwn new window
    Given  I am on a window
    When I click new window
    Then New window opens and i verify that

    Scenario: As a user i should be verify Entered keystroke
    Given  I am on a browser window
    When I enter BACKSPACE in input feild
    Then I verify that i entered backspace