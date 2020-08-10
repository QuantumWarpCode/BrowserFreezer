var search = window.location.search;

if (search != "") {
	const urlParams = new URLSearchParams(search);
	var searchURL = urlParams.get('q')

	document.getElementById("website-link").innerHTML = searchURL
	document.getElementById("website-link").setAttribute('href', searchURL);
	document.getElementById("links-link").setAttribute('href', "link_page.html?q=" + searchURL);


	const hostURL = new URL(searchURL).hostname;
	const splitURL = hostURL.split(".");
	const domainURL = splitURL[splitURL.length - 2] + "." + splitURL[splitURL.length - 1];
	const companyURL = splitURL[splitURL.length - 2];

	const smallURL = encodeURIComponent(searchURL.replace(/^https?\:\/\//i, ""));
	searchURL = encodeURIComponent(searchURL);

	document.getElementById("website-ico").setAttribute('src', "https://" + hostURL + "/favicon.ico");
}
