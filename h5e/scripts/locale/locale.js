define(["jquery", "i18n!std_dict/nls/nouns", "jq.pubsub", "jquery/jquery.tmpl", "jquery-ui/jquery-ui.custom.min"], function($, nouns, pubsub, tmpl) {

	/* --- private variables --- */

	var i18nMaster = ["std_dict/nls/nouns"];
	var languageMaster = "std_dict/nls/language";
	var templateID = "locale_template";
	var defaultTemplateMarkup = '<h2>${language_settings_label}</h2>' +
	'<ul><li class="language">${browser_language}</li></ul>';

	/* ---- private functions ---- */
	function getBrowserLanguage() {
		return navigator.language? navigator.language : navigator.userLanguage || "";
	}

	function getAvailableLanguages() {
		var languages = new Array();
		for(var m in i18nMaster) {
				require([i18nMaster[m]], function (i18n) {
				//	for(var l in i18n){
				//		alert(l);
				//	}
				});
		}
	}

	function render() {
		var data = {
			'language_settings_label': nouns.root.language_setting_pl,
			'browser_language' : getBrowserLanguage()
		};
		var $locale = $("#locale");
		if($locale.length) {
			$locale.children().empty();
			$.tmpl(templateID, data).appendTo($locale);
			$locale.children('h2').click( function() {
				$locale.children('ul').toggle('slow', 'swing');
			});
		}
	}

	function setup() {
		getAvailableLanguages();
		// std_dict/nls/nouns
		$.template(templateID, defaultTemplateMarkup);
	}

	/* --- module object --- */
	var _locale = {
		/* --- public functions and variables--- */
		'onReady': function () {
			setup();
			render();
			/*subscribeDocumentEvents();
			 publishDocumentEvents();*/
		}
	};

	_locale.onReady(); // no deps

	return _locale;
});