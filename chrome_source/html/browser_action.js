function findTab(tabs){
	for (let tab of tabs){
		var searchURL = tab.url;
		
		if (searchURL != null) {
			const hostURL = new URL(searchURL).hostname;
			const splitURL = hostURL.split(".");
			const domainURL = splitURL[splitURL.length - 2] + "." + splitURL[splitURL.length - 1];
			const companyURL = splitURL[splitURL.length - 2];

			const smallURL = encodeURIComponent(searchURL.replace(/^https?\:\/\//i, ""));
			searchURL = encodeURIComponent(searchURL);
			
			document.getElementById("website-link").innerHTML = decodeURIComponent(hostURL);
		}
	}
}

let tabQuery = browser.tabs.query({active: true, currentWindow: true})
tabQuery.then(findTab)