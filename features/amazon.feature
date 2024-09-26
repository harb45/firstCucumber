Feature: Ecommerce validation
    Scenario: Visit the ecommerce website
        Given   I am on the ecommerce website
        When    I search for a "basket"
        Then    I should see the search results

    Scenario: Add an article to card
        Given   I am on the article page
        When    I click on add to card
        Then    I should see a new article in my card

    Scenario: Increase the quantity of the article
        Given   I added the article to my card
        When    I click on the card
        Then    I can increase the quantity the article

    Scenario: Delete an article
        Given   I am in the card page
        When    I click on delete buton
        Then    I erase the article