// custom script

$(document).ready(function() {
//calling jPreLoader function with properties
	jQuery('body').jpreLoader({
		splashID: "#jSplash",
		splashFunction: function() {  //passing Splash Screen script to jPreLoader
			jQuery('#jSplash').children('section').not('.selected').hide();
			jQuery('#jSplash').hide().fadeIn(800);
			// init_de();
			var timer = setInterval(function() {
				splashRotator();
			}, 1500);
		}
	}, function() {	//jPreLoader callback function
		clearInterval();
		
			jQuery(function(){
			var v_url = document.URL;
			
			if (v_url.indexOf('#') != -1) {
			var v_hash = v_url.substring(v_url.indexOf("#")+1);
			
			
				jQuery('html, body').animate({					
				scrollTop: jQuery('#' + v_hash).offset().top - 70
				}, 200);
				return false;
			}
	});
		});
	function splashRotator(){
		var cur = jQuery('#jSplash').children('.selected');
		var next = jQuery(cur).next();
		
		if(jQuery(next).length != 0) {
			jQuery(next).addClass('selected');
		} else {
			jQuery('#jSplash').children('section:first-child').addClass('selected');
			next = jQuery('#jSplash').children('section:first-child');
		}
			
		jQuery(cur).removeClass('selected').fadeOut(100, function() {
			jQuery(next).fadeIn(100);
		});
	}
});