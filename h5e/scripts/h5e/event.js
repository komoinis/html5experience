define(["jquery", "i18n!std_dict/nls/nouns", "jq.pubsub"], function($, nouns, pubsub) {

	/* --- private --- */
	var documentEvents = "afterprint beforeonload error haschange message offline online pagehide pageshow popstate undo redo resize storage unload";

	function layout(){
		$("<h2>" + nouns.root.event + "</h2><ul/>").appendTo($("#event"));
		$("#event").click(function(){
			$("#event ul").toggle('slow', 'swing');
		});
	}

	function publishDocumentEvents() {		
			$(window).bind(documentEvents, function(event){
				$.publish("/event", [event]);
				$.publish("/event/document", [event]);
				$.publish("/event/document" + event.type, [event]);
			});
	}
	function subscribeDocumentEvents() {
		$.subscribe("/event/document", function(event) {			
			append("window : " + event.type);
		});
		$.subscribe("/event/document/error", function(event) {			
			$.publish("/error/document", [event]);
		});
	}
	function append(item) {
		$("<li>" + item + "</li>").appendTo($("#event ul"));
	}
	/* --- module object --- */
	var _event = {
		/* --- public --- */
		onReady: function () {
			layout();
			subscribeDocumentEvents();
			publishDocumentEvents();
		}
	};

	_event.onReady(); // no deps

	return _event;
});