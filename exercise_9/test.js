var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;

var driver = new webdriver.Builder()
	.forBrowser('chrome')
	.build();

driver.get('https://loghen41.github.io');


var input = driver.findElement(By.className('fullInput'));
input.sendKeys('Write some Code');
console.log(webdriver.Key);
input.sendKeys(webdriver.Key.TAB)
	.then(
		function(){console.log("promise resolved")},
		function() {console.log("promise rejected")});
driver.sleep(3000);

input.getAttribute('value')
	.then(function(text) {
		console.log(text);
	});
var button = driver.findElement(By.className('fullButton'));
button.click();
driver.sleep(2000);

driver.quit();