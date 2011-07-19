define(["jquery", "locale/locale", "i18n!std_dict/nls/nouns", "jq/jquery.tmpl", "jquery-ui/jquery-ui.custom.min"], function($, locale, initialNouns) {

	/* --- private variables --- */
	var nouns = initialNouns;

	var templateID = "locale_template";

	var defaultTemplateMarkup = '<h2>${language_settings_label}</h2>'
	+'<ul><li class="language">${browser_language}</li>'
	+'{{each(i, language) available_languages}}'
	+ '<li>${language}</li>'
	+'{{/each}}'
	+ '</ul>';

	/* ---- private functions ---- */

	function render() {
		var data = {
			'language_settings_label': nouns.root.language_setting_pl,
			'browser_language' : locale.getBrowserLanguage(),
			'available_languages' : locale.getAvailableLanguages()
		};
		var $locale = $("#locale");
		if($locale.length) {
			$locale.children().empty();
			$.tmpl(templateID, data).appendTo($locale);
			$locale.children('h2').click( function() {
				$locale.children('ul').toggle();
			});
		}
	}

	function setup() {
		$.template(templateID, defaultTemplateMarkup);
	}

	/* --- module object --- */
	var localeUI = {
		/* --- public functions and variables--- */
		'onReady': function () {
			setup();
			render();
		}
	};

	setTimeout(localeUI.onReady, 100);

	return localeUI;
});