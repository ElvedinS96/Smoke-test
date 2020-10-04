This is smoke test for the demo app: http://automationpractice.com/index.php.
Test is written with Jasmine and Protractor, and executed in both Google Chrome and Mozilla Firefox.

For running test:
 1. Run Selenium server in terminal with: webdriver-manager start
 2. Run config file in terminal: protractor conf.js

Test Case Summary : Verify that User can enter his credentials and sign in,  
in search bar enter items, add some items to the cart, choose payment methods, and confirm his order.

Steps to reproduce:

    1. In "Email address" field, which is located in "Already registered" form, enter @Data
    2. In "Password" enter @Dataa
    3. Click on the “Sign in” button, which is located in "Already registered?" form
    4. In “Search bar” enter the @Data
    5. Click “Search” button
    6. Hover over on the first offered dress
    7. Click “Add to cart” button
    8. Click on “Proceed to checkout” button
    9. Click on “Proceed to checkout” button
    10. Click on “Proceed to checkout” button
    11. Check “Terms of service”
    12. Click on “Proceed to checkout” button
    13. Click on “Pay by bank wire”
    14. Click on “I confirm my order”

Test Data:
    1.  gigedov@getnada.com
    2.  testing1
    4.  printed summer dress

Expected result:

    Message "ORDER COFNRIMATION"  shows up, and order is finished.