define(["jquery", "i18n!std_dict/nls/nouns"], function($) {

	/* --- private variables --- */
	var masters = ["std_dict/nls/nouns"]; // TODO: use from app

	/* ---- private functions ---- */
	function getBrowserLanguage() {
		return navigator.language? navigator.language : navigator.userLanguage || "";
	}

	function getAvailableLanguages() {
		var availableLanguages = new Array();
		for(var master in masters) {
			require([masters[master]], function (languages) {
				for(var language in languages) {
					availableLanguages.push(language);
				}
			});
		}
		return availableLanguages;
	}

	function onReady() {
			// keep just functional TODO: publish/log if needed
	}

	var module = {
		'getAvailableLanguages' : getAvailableLanguages,
		'getBrowserLanguage' : getBrowserLanguage
	};

	onReady();

	return module;
});