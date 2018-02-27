// set up selenium-webdriver

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

//  new webdriver.Builder sets up new instance of driver
// forBrowser method specifies what browser to test
// the build method is used to build the instance
// driver.get method is used to load the page you want to test, also works on local.
// driver.findElement(By.Id) looks for an element with that id
// .sendKeys sends what you type into the element
// sleep method accepts a value to to wait in milliseconds before the code executes

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
    driver.get('http://inoa.joekanauss.info/?page_id=352');

    var POCname = driver.findElement(By.id("fld_6242782_1"));
    POCname.sendKeys("Selnium test field 1");

    var POCemail = driver.findElement(By.id("fld_5854675_1"));
    POCemail.sendKeys("Selniumtest@gmail.com");

    var POCphone = driver.findElement(By.id("fld_9906899_1"));
    POCphone.sendKeys("555-123-0892");

    var POCeventName = driver.findElement(By.id("fld_8828313_1"));
    POCeventName.sendKeys("Selnium test");

    var POCeventCity = driver.findElement(By.id("fld_1716235_1"));
    POCeventCity.sendKeys("Selnium test");

    var POCeventStartDateField = driver.findElement(By.css("#fld_2809188_1"));
    POCeventStartDateField.click();
    
    var startdate = By.css(".cfdatepicker-days > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(6)")

    driver.wait(until.elementLocated(startdate)).click()
    .then(function(){
        var endDateField = By.css("#fld_3863934_1");
        driver.wait(until.elementLocated(endDateField)).click()
    .then(function(){
        var endDate = By.css(".cfdatepicker-days > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(1)");
        driver.wait(until.elementLocated(endDate)).click()
    .then(function(){
        var POCeventState = driver.findElement(By.id("fld_9192392_1")).sendKeys("Iowa");
        
        var POCeventType = driver.findElement(By.id("fld_4642746_1")).sendKeys("community event");
        
        var POCeventCountry = driver.findElement(By.id("fld_5225639_1"));
        POCeventCountry.sendKeys("Selniumtest Country");
        
        var POCeventType = driver.findElement(By.id("fld_6242782_1"));
        POCeventType.sendKeys("Selnium test field 1");
        
        var POCloeName = driver.findElement(By.id("fld_2733798_1"));
        POCloeName.sendKeys("Selnium test");

        var POCLeDepartment = driver.findElement(By.id("fld_2674374_1"));
        POCLeDepartment.sendKeys("Selnium test");

        var POCleDepartmentNumber = driver.findElement(By.id("fld_9482150_1"));
        POCleDepartmentNumber.sendKeys("555-321-0502");

        var POCleContactEmail = driver.findElement(By.id("fld_2478008_1"));
        POCleContactEmail.sendKeys("Selnium@gmail.com");

        var submitButton = driver.findElement(By.id("fld_1164342_1"));
        submitButton.click();
    });
    });
    });