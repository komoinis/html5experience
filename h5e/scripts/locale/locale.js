// Language?
/*
* Cultures (whole or parts)  
* Application
* Environment (environment/System) (def: readonly)
* User.
* */




define(['globalize/globalize', 'i18n!std_dict/nls/de-ch/nouns'], function(globalize) {

	/* --- private variables --- */
	var masters = ['std_dict/nls/nouns']; // TODO: use from app

	/* ---- private functions ---- */
	function environmentLanguage() {
		// TODO: support non-browser env
		return navigator.language? navigator.language : navigator.userLanguage || ''
	}

	function applicationLanguages() {
		var applicationLanguages = []
		for(var master in masters) {
			require([masters[master]], function (languages) {
				for(var language in languages) {
					applicationLanguages.push(language)
				}
			})
		}
		return applicationLanguages
	}

	function onReady() {
			// keep just functional TODO: publish/log if needed
			
			// load app languages TODO
			require(['globalize/cultures/globalize.culture.de'], function(global, culture){
				//console.log(globalize.cultures)
			})
			require(['globalize/cultures/globalize.culture.ar-DZ'], function(global, culture){
				//console.log(globalize.cultures)
			})
	}

	var module = { // TODO in get übersetzen
		'use' : 'environment',
		'application' : {get languages(){ return applicationLanguages}},
		'environment' : {get language(){ return environmentLanguage}}
	}

	onReady()

	return module
});