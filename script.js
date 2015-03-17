var main = function(){
	// Soundcloud functionality
	(function(){
		var widgetIframe = document.getElementById('sc-widget'),
		widget       = SC.Widget(widgetIframe);

	    widget.bind(SC.Widget.Events.READY, function() {
	    	widget.bind(SC.Widget.Events.PLAY, function() {
	    	// get information about currently playing sound
	    		widget.getCurrentSound(function(currentSound) {
	    			console.log('sound ' + currentSound.get('') + 'began to play');
	    		});
	    	});
	    	// get current level of volume
	    	widget.getVolume(function(volume) {
	    		console.log('current volume value is ' + volume);
	    	});
	    	// set new volume level
	    	widget.setVolume(50);
	    	// get the value of the current position
		});
	}());

	!function(d,s,id){
		var js,fjs=d.getElementsByTagName(s)[0],
		p=/^http:/.test(d.location)?'http':'https';
		if(!d.getElementById(id)){
			js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);
		}
	}
	(document,"script","twitter-wjs");
};

$(document).ready(main);