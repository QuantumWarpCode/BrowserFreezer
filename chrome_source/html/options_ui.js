var replacements;
var rIsRegexp = /^\/(.+)\/([gim]+)?$/;

function handleStorage(regexs){
	document.getElementById("oregex").innerHTML = regexs["regexs"][0];
	document.getElementById("oreplace").innerHTML = regexs["regexs"][1];
};

function getStorage() {
	var regexs = browser.storage.local.get("regexs");
	regexs.then(handleStorage);
};

function setStorage() {
	var regexs = [document.getElementById("regex").value, document.getElementById("replace").value ];
	browser.storage.local.set({"regexs": regexs});
};

document.getElementById("submit").onclick = setStorage;
document.getElementById("osubmit").onclick = getStorage;