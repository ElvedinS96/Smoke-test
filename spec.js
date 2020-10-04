describe('Smoke test for demo app', function() {
    
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
    browser.get('http://automationpractice.com/index.php?controller=authentication&back=my-account');
    

it('Initial build testing', function() {
    
    // Enter email in "Email address" field, which is located in "Already registered?" form
    browser.driver.findElement(by.id("email")).sendKeys("gigedov@getnada.com");

    // Enter password in "Password" field, which is located in "Already registered?" form
    browser.driver.findElement(by.id("passwd")).sendKeys("testing1");

    // Click on "Sign in" button, which is located in "Already registered?" form
    browser.driver.findElement(by.id("SubmitLogin")).click();
    browser.sleep(3000);

    // Enter data in search bar
    browser.driver.findElement(by.id("search_query_top")).sendKeys("printed summer dress");

    // Click on search icon
    browser.driver.findElement(by.className("btn btn-default button-search")).click();
    browser.sleep(3000);

    // Hover over the first showed item
    browser.actions().mouseMove(element(by.className("product_img_link"))).perform();
    browser.sleep(3000);
    // Add item to the cart
    browser.driver.findElement(by.className("button ajax_add_to_cart_button btn btn-default")).click();
    browser.sleep(6000);
    
    // Proceed to checkout
    browser.driver.findElement(by.className("btn btn-default button button-medium")).click();
    
    // 01. Summary form opened && Click on proceed button
    browser.driver.findElement(by.className("button btn btn-default standard-checkout button-medium")).click();
    browser.sleep(3000);

      // 03. Address form opened && Click on proceed button
    browser.driver.findElement(by.xpath("//*[@id='center_column']/form/p/button")).click();

    // 04. Shipping form opened &&  click on "Agree to the terms of service" && Click on proceed button
    browser.driver.findElement(by.xpath("//*[@id='form']/div/p[2]/label")).click();
    browser.driver.findElement(by.className("button btn btn-default standard-checkout button-medium")).click();
    browser.sleep(2000);

    // 05. Payment form opened && Click on "Pay by bank wire"
    browser.driver.findElement(by.className("bankwire")).click();

    // 05. Payment form opened && Click on "I confirm my order" button
    browser.driver.findElement(by.xpath("//*[@id='cart_navigation']/button")).click(); 
    browser.sleep(2000);

    // Test assertions
    expect(element(by.className("page-heading")).getText()).toEqual("ORDER CONFIRMATION");
});
});
// protractor conf.js
// webdriver-manager start
