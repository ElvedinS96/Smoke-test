This is smoke test for the demo app: http://automationpractice.com/index.php.
Test is written with Jasmine and Protractor, and executed in both Google Chrome and Mozilla Firefox.

Test Case Summary : Verify that User can enter his credentials and sign in,  
in search bar enter items, click on item, click on images, close images, 
add item quantity, select size dropdown, add to cart, choose payment methods, and confirm his order.

Steps to reproduce:

    1. In "Email address" field, which is located in "Already registered" form, enter @Data
    2. In "Password" enter @Data
    3. Click on the “Sign in” button, which is located in "Already registered?" form
    4. In “Search bar” enter the @Data
    5. Click “Search” button
    6. Hover over on the first offered dress
    7. Click on the first offered dress
    8. Click on first shown item picture
    9. Click on Close icon to close the first shown picture
    10. Click on second shown item picture
    11. Click on Close icon, to close the second shown picture
    12. Click on "Quantity" field
    13. Enter @Data
    14. Enter @Data
    15. Click on "Size" dropdown menu
    16. Enter option @Data in dropdown menu
    17. Click on "Add to cart" button
    18. Click on “Proceed to checkout” button
    19. Click on “Proceed to checkout” button
    20. Click on “Proceed to checkout” button
    21. Check “Terms of service”
    22. Click on “Proceed to checkout” button
    23. Click on “Pay by bank wire”
    24. Click on “I confirm my order”

Test Data:
    1. gigedov@getnada.com
    2.  testing1
    4.  printed summer dress
    13. Backspace
    14. 6
    16. M

Expected result:

1. @Data is entered in the "Email address" field
2. @Data is entered in the "Password" field
3. "Sign in" button is clicked and User is logged in
4. @Data is entered in the "Search bar"
5. "Search" button is clicked, and items are shown
6. First offered dress is hovered
7. First offered dress is clicked, and page with item opens, which contains images, quantity field, size field, writing a review, sending to a friend, buttons for sharing on Facebook, Twitter, Google+, Pinterest, and ""Add to cart"" button
8, First shown picture is clicked, and picture opens
9. "Close" icon is clicked, and picture closes
10. Second shown picture is clicked, and picture opens
11. "Close" icon is clicked, and picture closes
12. "Quantity" field is clicked, and it has focus
13. @Data is entered, and input is empty
14. @Data is entered, and input contains number 6
15. "Size" dropdown is clicked, opened and shows values S, M, L
16. @Data is selected
17. "Add to cart" button is clicked, and item is added to the cart
18. "Proceed to checkout" button is clicked, and order is forwarded to the next
19. "Proceed to checkout" button is clicked, and order is forwarded to the next step
20. "Proceed to checkout" button is clicked, and order is forwarded to the next step
21. "Terms of service" are checked
22. "Proceed to checkout" button is clicked, and order is forwarded to the next step
23. "Pay by bank wire" is slicked, and order is forwarded to the next step 
24. "I confirm my order" button is clicked, and order is made with the message "ORDER COFNRIMATION"  shows up, and order is finished

Setup instructions:

1. Install Node JS (https://nodejs.org/en/download/) 
2. Install Java (https://www.java.com/en/download/)
3. Install Protractor (in command line enter: npm install -g protractor)
4. Update Selenium Driver instance (in command line enter: webdriver-manager update)
5. Git (https://git-scm.com/downloads) 
6. Clone this repository by running: gh repo clone ElvedinS96/Smoke-test
...or downloading project ZIP. For more on cloning see https://help.github.com/en/articles/cloning-a-repository.

For running tests:
1. Enter webdriver-manager start in Windows Powershell
2. From files directory, run in terminal: protractor conf.js
