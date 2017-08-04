var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;

var driver = new webdriver.Builder()
	.forBrowser('chrome')
	.build();

driver.get('https://loghen41.github.io');
driver.findElement(By.className('fullInput')).sendKeys('Write some Code');
driver.findElement(By.className('fullButton')).click();
driver.sleep(2000);
driver.quit();