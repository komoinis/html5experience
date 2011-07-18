define(["jquery","i18n!std_dict/nls/nouns"], function($, nouns) {
	
	var isBrowser = true; // TODO: setze sinnvolle Vorbedingungen
	var mode = isBrowser ? 'Client' : 'Server';

	var _app = {
		onReady: function () {
			//alert("hello " + nouns.root.event_pl);
		}
	};

	// loads either Client or Server class for Db and
	// Conduit depending upon if we are on the
	// client or server
	require(['event/event', 'locale/locale-ui'], function (event, locale) {
		// app has loaded, fire anything that has
		// connected to app.onReady!
		_app.onReady();
	});
	
	return _app;
});