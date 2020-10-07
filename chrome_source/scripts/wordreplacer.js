var words = {
///////////////////////////////////////////////////////


	// Syntax: 'Search word' : 'Replace word',
	//'/\\b(ass)\\b/g' : 'a**',
	//'/\\b(Ass)\\b/g' : 'A**',
	//'/\\b(asses)\\b/g' : 'a**es',
	//'/\\b(Asses)\\b/g' : 'A**es'


///////////////////////////////////////////////////////
};

var regexs = [], replacements = [], word, userRegexp;
var rIsRegexp = /^\/(.+)\/([gim]+)?$/;
var tagsWhitelist = ['PRE', 'BLOCKQUOTE', 'CODE', 'INPUT', 'BUTTON', 'TEXTAREA', 'TITLE'];

function prepareRegex(string) {
	return string.replace(/([\[\]\^\&\$\.\(\)\?\/\\\+\{\}\|])/g, '\\$1');
};

function isTagOk(tag) {
	return tagsWhitelist.indexOf(tag) === -1;
};

function handleStorage(storage){
	var regex = storage["regexs"][0];
	var replace = storage["regexs"][1];
	words[regex] = replace;
};

function getWords() {
	var storage = browser.storage.local.get("regexs");
	storage.then(handleStorage);
};

function getRegexs() {
	console.log(words);
	for (word in words) {
		if ( typeof word === 'string' && words.hasOwnProperty(word) ) {
			userRegexp = word.match(rIsRegexp);

			// add the search
			if (userRegexp) {
				regexs.push(
					new RegExp(userRegexp[1], 'g')
					console.log(regexs);
				);
			} else {
				regexs.push(
					new RegExp(prepareRegex(word).replace(/\\?\*/g, function (fullMatch) {
						return fullMatch === '\\*' ? '*' : '[^ ]*';
					}), 'g')
				);
			}
			// add the replacement
			replacements.push( words[word] );
		}
	}
}

function wordReplace() {
	var texts, text, i
	texts = document.evaluate('//text()[ normalize-space(.) != "" ]', document, null, 6, null);
	for (i = 0; text = texts.snapshotItem(i); i += 1) {
		if ( isTagOk(text.parentNode.tagName) ) {
			if (text.data != null){
				regexs.forEach(function (value, index) {
					text.data = text.data.replace(value, replacements[index]);
				});
			}
		}
	}
	regexs.forEach(function (value, index) {
		document.title = document.title.replace(value, replacements[index]);
	});
}

getWords();
getRegexs();
wordReplace();
