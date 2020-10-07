tabQuery = chrome.tabs.query({active: true, lastFocusedWindow: true}, function (tabs) {
	for (let tab of tabs){
		var searchURL = tab.url;
		
		if (searchURL != null) {
			const hostURL = new URL(searchURL).hostname;
			const splitURL = hostURL.split(".");
			const domainURL = splitURL[splitURL.length - 2] + "." + splitURL[splitURL.length - 1];
			const companyURL = splitURL[splitURL.length - 2];

			const smallURL = encodeURIComponent(searchURL.replace(/^https?\:\/\//i, ""));
			searchURL = encodeURIComponent(searchURL);
			
			document.getElementById("mainlink").setAttribute('href', "link_page.html?q=" + searchURL);

			document.getElementById("duckduckgo").setAttribute('href', "https://duckduckgo.com/?q=" + searchURL);
			document.getElementById("safebrowsing").setAttribute('href', "https://transparencyreport.google.com/safe-browsing/search?url=" + searchURL);
			document.getElementById("virustotal").setAttribute('href', "https://www.virustotal.com/gui/domain/" + hostURL + "/detection");
			document.getElementById("tosdr").setAttribute('href', "https://tosdr.org/#" + companyURL);
			document.getElementById("geotool").setAttribute('href', "https://iplookup.flagfox.net/?&host=" + searchURL);
			document.getElementById("whois").setAttribute('href', "https://whois.domaintools.com/" + smallURL);
			// TODO: icann needs added (if possible)
			//document.getElementById("icann").setAttribute('href', "https://lookup.icann.org/lookup?" + smallURL);
			document.getElementById("alexa").setAttribute('href', "https://www.alexa.com/siteinfo/" + smallURL);
			document.getElementById("isitup").setAttribute('href', "https://isitup.org/" + hostURL);
			document.getElementById("gtranslate").setAttribute('href', "https://translate.google.com/translate?sl=auto&tl=en&u=" + searchURL);
			document.getElementById("archive").setAttribute('href', "https://web.archive.org/web/*/" + searchURL);
			document.getElementById("archivetoday").setAttribute('href', "https://archive.today/" + searchURL);
			document.getElementById("megalodon").setAttribute('href', "https://megalodon.jp/?url=" + searchURL);
			document.getElementById("webcite").setAttribute('href', "https://www.webcitation.org/query?url=" + searchURL);
			document.getElementById("tinyurl").setAttribute('href', "https://tinyurl.com/create.php?source=create&url=" + searchURL);
			document.getElementById("isgd").setAttribute('href', "https://is.gd/create.php?url=" + searchURL);
			document.getElementById("wave").setAttribute('href', "https://wave.webaim.org/report#/" + searchURL);
		}
	}
});
