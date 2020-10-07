var search = window.location.search;

if (search != "") {
	const urlParams = new URLSearchParams(search);
	var URLtext = urlParams.get('q')

	document.getElementById("notepad").innerHTML = URLtext
}
