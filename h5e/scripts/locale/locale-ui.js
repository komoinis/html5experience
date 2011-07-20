define(["jquery", "locale/locale", "i18n!std_dict/nls/nouns", "text!locale/locale_template.html", "jq/jquery.tmpl", "jquery-ui/jquery-ui.custom.min"], function($, locale, initialNouns, templateMarkup) {
	/* --- private variables --- */
	var templateID = "locale_template";

	var nouns = initialNouns;

	function render() {
		var $locale = $("#locale");
		if($locale.length) {
			$locale.children().empty();
			$.tmpl(templateID, getData()).appendTo($locale);
			$locale.children('h2').click( function() {
				$locale.children('ul').toggle();
			});
		}
	}

	function getData() {
		return {
			'language_settings_label': nouns.root.language_setting_pl,
			'browser_language' : locale.getBrowserLanguage(),
			'available_languages' : locale.getAvailableLanguages()
		};
	}

	function setup() {
		$.template(templateID, templateMarkup);
	}

	function onReady() {
		setup();
		render();
	};

	var module = {
		// no public methods for now
	};

	setTimeout(onReady, 20);

	return module;
});