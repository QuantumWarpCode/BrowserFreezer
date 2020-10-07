var search = window.location.search;

if (search != "") {
	const urlParams = new URLSearchParams(search);
	var searchURL = urlParams.get('q')

	document.getElementById("website-link").innerHTML = searchURL


	const hostURL = new URL(searchURL).hostname;
	const splitURL = hostURL.split(".");
	const domainURL = splitURL[splitURL.length - 2] + "." + splitURL[splitURL.length - 1];
	const companyURL = splitURL[splitURL.length - 2];

	const smallURL = encodeURIComponent(searchURL.replace(/^https?\:\/\//i, ""));
	searchURL = encodeURIComponent(searchURL);
	document.getElementById("website-link").setAttribute('href', "redirect.html?q=" + searchURL);

	document.getElementById("website-ico").setAttribute('src', "https://" + hostURL + "/favicon.ico");

	document.getElementById("duckduckgo").setAttribute('href', "https://duckduckgo.com/?q=" + searchURL);
	document.getElementById("safebrowsing").setAttribute('href', "https://transparencyreport.google.com/safe-browsing/search?url=" + searchURL);
	document.getElementById("virustotal").setAttribute('href', "https://www.virustotal.com/gui/domain/" + hostURL + "/detection");
	document.getElementById("tosdr").setAttribute('href', "https://tosdr.org/#" + companyURL);
	document.getElementById("geotool").setAttribute('href', "https://iplookup.flagfox.net/?&host=" + searchURL);
	document.getElementById("whois").setAttribute('href', "https://whois.domaintools.com/" + smallURL);
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

	document.getElementById("talos").setAttribute('href', "https://talosintelligence.com/reputation_center/lookup?search=" + searchURL);
	document.getElementById("wmtips").setAttribute('href', "https://www.wmtips.com/tools/info/" + hostURL);
	// hphosts is down :(
	//document.getElementById("hphosts").setAttribute('href', "https://hosts-file.net/" + hostURL)
	document.getElementById("urlvoid").setAttribute('href', "https://www.urlvoid.com/scan/" + hostURL);
	document.getElementById("observatory").setAttribute('href', "https://observatory.mozilla.org/analyze/" + hostURL);
	document.getElementById("iidrn").setAttribute('href', "https://www.isitdownrightnow.com/" + hostURL + ".html");
	document.getElementById("downdetector").setAttribute('href', "https://downdetector.com/status/" + companyURL);
	document.getElementById("ytranslate").setAttribute('href', "https://translate.yandex.com/translate?url=" + searchURL);
	document.getElementById("qualys").setAttribute('href', "https://www.ssllabs.com/ssltest/analyze.html?d=" + hostURL);
	document.getElementById("googlecache").setAttribute('href', "https://webcache.googleusercontent.com/search?q=cache:" + searchURL);
	document.getElementById("w3cvalidator").setAttribute('href', "https://validator.w3.org/nu/?doc=" + searchURL);
	document.getElementById("w3ccss").setAttribute('href', "https://jigsaw.w3.org/css-validator/validator?uri=" + searchURL);
	document.getElementById("nuhtml").setAttribute('href', "https://validator.w3.org/nu/?doc=" + searchURL);
	document.getElementById("builtwith").setAttribute('href', "https://builtwith.com/?" + searchURL);
	document.getElementById("netcraft").setAttribute('href', "https://sitereport.netcraft.com/?url=" + searchURL);
	document.getElementById("intodns").setAttribute('href', "https://intodns.com/check/?domain=" + domainURL);
	document.getElementById("wolfram").setAttribute('href', "https://www.wolframalpha.com/input/?i=" + searchURL);
	document.getElementById("islegit").setAttribute('href', "https://www.islegitsite.com/check/" + hostURL);

	document.getElementById("google").setAttribute('href', "https://www.google.com/search?q=" + searchURL);
	document.getElementById("bing").setAttribute('href', "https://www.bing.com/search?q=" + searchURL);
	document.getElementById("yandex").setAttribute('href', "https://yandex.com/search/?text=" + searchURL);
	document.getElementById("siteadvisor").setAttribute('href', "https://www.siteadvisor.com/sitereport.html?url=" + searchURL);
	document.getElementById("safeweb").setAttribute('href', "https://safeweb.norton.com/report/show?url=" + searchURL);
	document.getElementById("weboftrust").setAttribute('href', "https://www.mywot.com/scorecard/" + hostURL);
	document.getElementById("yandexsafebrowsing").setAttribute('href', "https://www.yandex.com/safety?url=" + searchURL);
	document.getElementById("sslcheck").setAttribute('href', "https://www.sslshopper.com/ssl-checker.html#hostname=" + hostURL);
	document.getElementById("badbitcoin").setAttribute('href', "https://www.badbitcoin.org/search/searchsite?website=" + hostURL);
	document.getElementById("threatlog").setAttribute('href', "https://www.threatlog.com/domain/" + hostURL);
	document.getElementById("urlvir").setAttribute('href', "https://www.urlvir.com/search-host/" + hostURL);
	document.getElementById("trustedshops").setAttribute('href', "https://www.trustedshops.co.uk/finder/?q=" + hostURL);
	
	document.getElementById("bbb").setAttribute('href', "https://www.bbb.org/search?find_text=" + companyURL + "&find_country=USA&page=1&sort=Relevance");
	// TODO: icann needs added (if possible)
	//document.getElementById("icann").setAttribute('href', "https://lookup.icann.org/lookup?" + smallURL);
	// TODO: surbl needs added (if possible)
	//document.getElementById("surbl").setAttribute('href', "http://www.surbl.org/surbl-analysis?" + smallURL);
}
