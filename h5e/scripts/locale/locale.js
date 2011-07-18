define(["jquery", "jq.pubsub", "i18n!std_dict/nls/nouns"], function($) {

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

		require(["i18n!std_dict/nls/nouns"], function (i18n) {
			var i = i18n;
			alert(i);
		});
		return availableLanguages;
	}

	/* --- module object --- */
	var locale = {
		/* --- public functions and variables--- */
		'onReady': function () {
			// keep just functional TODO: publish/log if needed
		},
		'getAvailableLanguages' : getAvailableLanguages,
		'getBrowserLanguage' : getBrowserLanguage
	};

	locale.onReady();

	return locale;
});