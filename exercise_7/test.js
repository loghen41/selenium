var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;

var driver = new webdriver.Builder()
	.forBrowser('chrome')
	.build();

driver.get('https://loghen41.github.io');

// Good job using the sendKeys method, but did you notice how quickly the browser closed after you completed your command?
// Try finding a way to make the browser stay open longer, so you can manually verify that the text is on the page.

driver.findElement(By.className('fullInput')).sendKeys('Write some Code');
driver.findElement(By.className('fullButton')).click();
driver.sleep(2000);
driver.quit();
