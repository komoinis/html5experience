define(["jquery", "locale/locale", "i18n!std_dict/nls/de-CH/nouns", "text!locale/locale_template.html", "globalize/globalize", "jq/jquery.tmpl", "jquery-ui/jquery-ui.custom.min"], function($, locale, initialNouns, templateMarkup, globalize) {
	/* --- private variables --- */
	var templateID = "locale_template"

	var nouns = initialNouns

	function render() {
		var $locale = $("#locale")
		if($locale.length) {
			$locale.children().empty()
			
			$.tmpl(templateID, getData()).appendTo($locale)
			
			$locale.children('h2').click( function() {
				$locale.children('ul').toggle()
			})
		}
	}

	function getData() {
		// TODO geeignete/mögliche Sprachkombinationen und Daten finden
		var availableLanguages = locale.availableLanguages
	/*	for (l in availableLanguages) {
			var language = availableLanguages[l]
			language = (language === "root" ? "default" : language)
			var culture = globalize.findClosestCulture(language)
			//console.log(culture.name + " is closest to " + language)
			console.log(language + ':' + culture.name)
		}	*/
		
		return {
			'nouns': nouns.root, // TODO: bessere Lösung
			'locale' : locale
		}
	}

	function setup() {
		$.template(templateID, templateMarkup)
	}

	function onReady() {
		setup()
		render()
	}

	var module = {
		// no public methods for now
	}

	setTimeout(onReady, 20)

	return module
})