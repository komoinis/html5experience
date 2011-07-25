define(["jquery", "globalize/globalize", "i18n!std_dict/nls/nouns"], function($, globalize) {

	/* --- private variables --- */
	var masters = ["std_dict/nls/nouns"]; // TODO: use from app

	/* ---- private functions ---- */
	function getBrowserLanguage() {
		return navigator.language? navigator.language : navigator.userLanguage || ""
	}

	function getAvailableLanguages() {
		var availableLanguages = new Array()
		for(var master in masters) {
			require([masters[master]], function (languages) {
				for(var language in languages) {
					availableLanguages.push(language)
				}
			})
		}
		return availableLanguages
	}

	function onReady() {
			// keep just functional TODO: publish/log if needed
			
			// load app languages TODO
			require(["globalize/cultures/globalize.culture.de"], function(global, culture){
				console.log(globalize.cultures)
			})
			require(["globalize/cultures/globalize.culture.ar-DZ"], function(global, culture){
				console.log(globalize.cultures)
			})
	}

	var module = { // TODO in get übersetzen
		'getAvailableLanguages' : getAvailableLanguages,
		'getBrowserLanguage' : getBrowserLanguage
	}

	onReady()

	return module
})