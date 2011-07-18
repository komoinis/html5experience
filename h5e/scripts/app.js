define(["jquery","i18n!std_dict/nls/nouns"], function($, nouns) {
	
	var isBrowser = true; // TODO: setze sinnvolle Vorbedingungen
	var mode = isBrowser ? 'Client' : 'Server';

    // Danke für http://zetafleet.com/blog/unified-codebases-with-dojo-node-and-requirejs-the-holy-grail-of-dry
	// our main application object; anything else that
	// requires 'my/app' in the future will receive this
	// object (because it’s returned at the end of this
	// function); all other defined modules work the
	// same way: the callback is invoked once and
	// the returned value is cached by RequireJS
	var _app = {
		onReady: function () {
			//alert("hello " + nouns.root.event_pl);
		}
	};

/*	// loads either Client or Server class for Db and
	// Conduit depending upon if we are on the
	// client or server
	require(['my/db/' + mode, 'my/conduit/' + mode,
	'my/Baz'], function (Db, Conduit, Baz) {

		app.db = new Db();
		app.conduit = new Conduit();

		// this module works exactly the same on
		// both client and server, no extra code
		// necessary! NICE!
		app.baz = new Baz();

		// app has loaded, fire anything that has
		// connected to app.onReady!
		app.onReady();
	});*/
	// loads either Client or Server class for Db and
	// Conduit depending upon if we are on the
	// client or server
	require(['event/main', 'locale/main'], function (event, locale) {
		// app has loaded, fire anything that has
		// connected to app.onReady!
		_app.onReady();
	});
	
	return _app;
});