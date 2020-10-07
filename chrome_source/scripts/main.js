"use strict";

console.log("Browser Freezer main.js first load:", Date());

function clickCounter() {
	console.log("Page action clicked!")
	var i = browser.browserAction.getBadgeText();
	console.log(i + " times")
	if (i == null){
		browser.browserAction.setBadgeText(1);
	} else {
		browser.browserAction.setBadgeText(i + 1);
	}
};

browser.pageAction.onClicked.addListener(clickCounter);
