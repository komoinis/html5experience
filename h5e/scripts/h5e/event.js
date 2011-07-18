define(["jquery", "i18n!std_dict/nls/nouns", "jq.pubsub", "jquery.tmpl"], function($, nouns, pubsub) {

	/* --- private --- */
	var documentEvents = "afterprint beforeonload error haschange message offline online pagehide pageshow popstate undo redo resize storage unload";

	var defaultTemplateMarkup = "<h2>${events_label}</h2> <ul/>";
	var topic = "/event/document";
	var templateID = "event_template";

	function render() {
		var data = {
			'events_label': nouns.root.event_pl
		};
		var $event = $( "#event" );
		if($event.length) {
			$event.children().empty();
			$.tmpl( templateID, data).appendTo( $event );
			$event.children('h2').click( function() {
				$event.children('ul').toggle('slow', 'swing');
			});
		}
	}

	function publishDocumentEvents() {
		$(window).bind(documentEvents, function(event) {
			$.publish(topic, [event]);
		});
	}

	function subscribeDocumentEvents() {
		$.subscribe(topic, function(event) {
			append("window : " + event.type);
		});
		// TODO: eigener errorhandler
		$.subscribe("/event/document/error", function(event) {
			$.publish(topic, [event]);
		});
	}

	function setup() {
		$.template( "event_template", defaultTemplateMarkup );
	}

	function append(item) {
		$("<li>" + item + "</li>").appendTo($("#event ul"));
	}

	/* --- module object --- */
	var _event = {
		/* --- public --- */
		onReady: function () {
			setup();
			render();
			subscribeDocumentEvents();
			publishDocumentEvents();
		}
	};

	_event.onReady(); // no deps

	return _event;
});