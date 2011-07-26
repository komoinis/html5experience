define(["jquery", "i18n!std_dict/nls/nouns"], function($, nouns) {

	var isBrowser = true // TODO: setze sinnvolle Vorbedingungen bzw lade aus datei/script und überschreibe defaults

	function onReady() {
		// TODO log or alert("app on ready");
	}

	var app = {
		'onReady': onReady
	}

	require(['locale/locale-ui'], function (event, locale) {
		app.onReady();
	})
	
	return app
})