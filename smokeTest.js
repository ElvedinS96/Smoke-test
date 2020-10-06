  describe('001: Smoke test ', function() {
    
    browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    browser.get('http://automationpractice.com/index.php');
    var EC = protractor.ExpectedConditions;

    it('001: User is able to sign in, search items, add them to the cart, choose paying method and complete order', function() {
    
      browser.driver.findElement(by.className("login")).click();
      browser.wait(EC.presenceOf($('#email')), 5000);
      // Enter email in "Email address" field, which is located in "Already registered?" form
      browser.driver.findElement(by.id("email")).sendKeys("gigedov@getnada.com");

      // Enter password in "Password" field, which is located in "Already registered?" form
      browser.driver.findElement(by.id("passwd")).sendKeys("testing1");

      // Click on "Sign in" button, which is located in "Already registered?" form
      browser.driver.findElement(by.id("SubmitLogin")).click();
      

      // Enter data in search bar
      browser.driver.findElement(by.id("search_query_top")).sendKeys("printed summer dress");

      // Click on search icon
      browser.driver.findElement(by.className("btn btn-default button-search")).click();

      // Hover over the first showed item
      browser.actions().mouseMove(element(by.className("product_img_link"))).click().perform();

      // Hover over images
      browser.actions().mouseMove(element(by.id("thumbnail_12"))).perform();
      browser.actions().mouseMove(element(by.id("thumbnail_13"))).perform();
      
           

      // Add quantity
      browser.driver.findElement(by.id("quantity_wanted")).sendKeys(protractor.Key.BACK_SPACE);
      browser.driver.findElement(by.id("quantity_wanted")).sendKeys(6);
      // Add size
      browser.driver.findElement(by.id("group_1")).click();
      browser.driver.findElement(by.css("#group_1 [value='2']")).click();
      
      // Add item to the cart
      browser.driver.findElement(by.xpath("//*[@id='add_to_cart']/button")).click();
      browser.manage().timeouts().implicitlyWait(5000);      
       // Proceed to checkout
      browser.driver.findElement(by.xpath("//*[@id='layer_cart']/div[1]/div[2]/div[4]/a")).click();
      
      // 01. Summary form opened && Click on proceed button
      browser.driver.findElement(by.className("button btn btn-default standard-checkout button-medium")).click();

      // 03. Address form opened && Click on proceed button
      browser.driver.findElement(by.xpath("//*[@id='center_column']/form/p/button")).click();

      // 04. Shipping form opened &&  click on "Agree to the terms of service" && Click on proceed button
      browser.driver.findElement(by.xpath("//*[@id='form']/div/p[2]/label")).click();
      browser.driver.findElement(by.className("button btn btn-default standard-checkout button-medium")).click();
      

      // 05. Payment form opened && Click on "Pay by bank wire"
      browser.driver.findElement(by.className("bankwire")).click();

      // 05. Payment form opened && Click on "I confirm my order" button
      browser.driver.findElement(by.xpath("//*[@id='cart_navigation']/button")).click(); 
      browser.wait(EC.presenceOf($('.page-heading')), 7000);
      // Test assertion
      expect(element(by.className("page-heading")).getText()).toEqual("ORDER CONFIRMATION");

      browser.driver.findElement(by.className("logout")).click();
      browser.wait(EC.presenceOf($('.page-heading')), 5000);
      expect(element(by.className("page-heading")).getText()).toEqual("AUTHENTICATION"); 
    });
  });

