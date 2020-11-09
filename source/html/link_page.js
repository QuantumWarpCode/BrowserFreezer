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
	document.getElementById("privacyspy").setAttribute('href', "https://privacyspy.org/product/" + companyURL);
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
	document.getElementById("blacklight").setAttribute('href', "https://themarkup.org/blacklight?url=" + searchURL);
	document.getElementById("wikipedia").setAttribute('href', "https://en.wikipedia.org/wiki/" + companyURL);

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
	document.getElementById("nauk").setAttribute('href', "https://webarchive.nationalarchives.gov.uk/*/" + hostURL);
	document.getElementById("nla").setAttribute('href', "https://trove.nla.gov.au/search/category/websites?keyword=" + hostURL);
	document.getElementById("bibalex").setAttribute('href', "http://web.archive.bibalex.org/web/*/" + hostURL);
	document.getElementById("wikiwix").setAttribute('href', "http://archive.wikiwix.com/cache/index2.php?url=" + searchURL);

	document.getElementById("google").setAttribute('href', "https://www.google.com/search?q=" + searchURL);
	document.getElementById("bing").setAttribute('href', "https://www.bing.com/search?q=" + searchURL);
	document.getElementById("yandex").setAttribute('href', "https://yandex.com/search/?text=" + searchURL);
	document.getElementById("siteadvisor").setAttribute('href', "https://www.siteadvisor.com/sitereport.html?url=" + searchURL);
	document.getElementById("safeweb").setAttribute('href', "https://safeweb.norton.com/report/show?url=" + searchURL);
	document.getElementById("weboftrust").setAttribute('href', "https://www.mywot.com/scorecard/" + hostURL);
	document.getElementById("yandexsafebrowsing").setAttribute('href', "https://www.yandex.com/safety?url=" + searchURL);
	document.getElementById("sslcheck").setAttribute('href', "https://www.sslshopper.com/ssl-checker.html#hostname=" + hostURL);
	document.getElementById("islegit").setAttribute('href', "https://www.islegitsite.com/check/" + hostURL);
	document.getElementById("badbitcoin").setAttribute('href', "https://www.badbitcoin.org/search/searchsite?website=" + hostURL);
	document.getElementById("threatlog").setAttribute('href', "https://www.threatlog.com/domain/" + hostURL);
	document.getElementById("urlvir").setAttribute('href', "https://www.urlvir.com/search-host/" + hostURL);
	document.getElementById("trustedshops").setAttribute('href', "https://www.trustedshops.co.uk/finder/?q=" + hostURL);
	document.getElementById("arquivo").setAttribute('href', "https://arquivo.pt/page/search?hitsPerPage=10&query=" + hostURL);
	
	document.getElementById("freezepage").setAttribute('href', "https://www.freezepage.com?q=" + hostURL);
	document.getElementById("loc").setAttribute('href', "https://webarchive.loc.gov/all/19960101000000-20191017235959*/" + hostURL);
	document.getElementById("stanford").setAttribute('href', "https://sul-swap-prod.stanford.edu/?q=" + hostURL);
	document.getElementById("archiveit").setAttribute('href', "https://archive-it.org/?q=" + hostURL);
	document.getElementById("nationalarchiveus").setAttribute('href', "https://www.webharvest.gov/?q=" + hostURL);
	document.getElementById("iceland").setAttribute('href', "https://vefsafn.is/?q=" + hostURL);
	document.getElementById("perma").setAttribute('href', "https://perma.cc/?q=" + hostURL);
	document.getElementById("ukparliament").setAttribute('href', "https://webarchive.parliament.uk/?q=" + hostURL);
	document.getElementById("ukwebarchive").setAttribute('href', "https://www.webarchive.org.uk/?q=" + hostURL);
	document.getElementById("canada").setAttribute('href', "https://webarchive.bac-lac.gc.ca/?q=" + hostURL);
	document.getElementById("singapore").setAttribute('href', "https://eresources.nlb.gov.sg/webarchives/?q=" + hostURL);
	document.getElementById("slovenia").setAttribute('href', "http://nukrobi2.nuk.uni-lj.si:8080/wayback/?q=" + hostURL);
	document.getElementById("estonia").setAttribute('href', "http://veebiarhiiv.digar.ee/?q=" + hostURL);
	document.getElementById("bavarian").setAttribute('href', "https://langzeitarchivierung.bib-bvb.de/?q=" + hostURL);
	document.getElementById("yorkuniversity").setAttribute('href', "https://digital.library.yorku.ca/?q=" + hostURL);
	document.getElementById("memento").setAttribute('href', "http://timetravel.mementoweb.org/list/20190103191737/" + searchURL);
	document.getElementById("ukgovernment").setAttribute('href', "https://webarchive.nationalarchives.gov.uk/search/" + hostURL);
	document.getElementById("proni").setAttribute('href', "https://www.nidirect.gov.uk/proni" + hostURL);
	document.getElementById("croatia").setAttribute('href', "https://haw.nsk.hr/en" + hostURL);
	
	document.getElementById("bingcache").setAttribute('href', "https://cc.bingj.com/cache.aspx?q=" + companyURL);
	document.getElementById("yandexcache").setAttribute('href', "https://yandexwebcache.net/yandbtm?q=" + hostURL);
	document.getElementById("gigablastcache").setAttribute('href', "https://gigablast.com/get?q=" + hostURL);
	document.getElementById("sogousnapshot").setAttribute('href', "https://snapshot.sogoucdn.com/websnapshot?q=" + hostURL);
	document.getElementById("qihoosnapshot").setAttribute('href', "https://c.360webcache.com/c?q=" + hostURL);
	document.getElementById("baidusnapshot").setAttribute('href', "https://cache.baiducontent.com/c?q=" + hostURL);
	document.getElementById("navercache").setAttribute('href', "http://poker.line.naver.jp/" + hostURL);
	
	document.getElementById("bbb").setAttribute('href', "https://www.bbb.org/search?find_text=" + companyURL + "&find_country=USA&page=1&sort=Relevance");
	// TODO: icann needs added (if possible)
	//document.getElementById("icann").setAttribute('href', "https://lookup.icann.org/lookup?" + smallURL);
	// TODO: surbl needs added (if possible)
	//document.getElementById("surbl").setAttribute('href', "http://www.surbl.org/surbl-analysis?" + smallURL);
}
