var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;

var driver = new webdriver.Builder()
	.forBrowser('chrome')
	.build();

driver.get('https://loghen41.github.io');

//
//


driver.findElement(By.className('fullInput')).sendKeys('Write some Code');
driver.findElement(By.className('fullInput')).getAttribute('value')
	.then(function(text) {
		console.log(text);
	});

driver.quit();


