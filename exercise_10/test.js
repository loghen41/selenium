var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;

var driver = new webdriver.Builder()
	.forBrowser('firefox')
	.build();

driver.get('https://loghen41.github.io');

driver.findElements(By.className('whiteText'))
	.then(function(elements) {
		console.log(elements);
		elements[1].click();
		driver.sleep(3000);
	});

driver.quit();