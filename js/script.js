$(document).ready( function() {
	var timer;	//timer for splash screen
	
	//calling jPreLoader
	$('body').jpreLoader({
		splashID: "#jSplash",
		loaderVPos: '70%',
		autoClose: true,
		closeBtnText: "Let's Begin!",
		splashFunction: function() {  
			//passing Splash Screen script to jPreLoader
			$('#jSplash').children('section').not('.selected').hide();
			$('#jSplash').hide().fadeIn(800);
			
			timer = setInterval(function() {
				splashRotator();
			}, 4000);
		}
	}, function() {	//callback function
		clearInterval(timer);
		$('#footer')
		.animate({"bottom":0}, 500);
		$('#header')
		.animate({"top":0}, 800, function() {
			$('#wrapper').fadeIn(1000);
		});
	});
	
	//create splash screen animation
	function splashRotator(){
		var cur = $('#jSplash').children('.selected');
		var next = $(cur).next();
		
		if($(next).length != 0) {
			$(next).addClass('selected');
		} else {
			$('#jSplash').children('section:first-child').addClass('selected');
			next = $('#jSplash').children('section:first-child');
		}
			
		$(cur).removeClass('selected').fadeOut(800, function() {
			$(next).fadeIn(800);
		});
	}

	//Carousel
	$('.carousel').carousel({
  interval: 6000,
  pause: "false"
});
	var item = $('.carousel .item');
var wHeight = $(window).height()-20;

item.height(wHeight); 
item.addClass('full-screen');

$('.carousel img').each(function() {
  var source = $(this).attr('src');
  var color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + source + ')',
    'background-color' : color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  wHeight = $(window).height();
  item.height(wHeight);
});
});

//Preheader
$(window).on('resize',function(){
	if($(window).width()>992){
		$('.preHeader').show();
$(document).bind('scroll',function(){
	if(window.scrollY>60){
		$('.preHeader').slideUp()
	}else{
		$('.preHeader').slideDown()
	}
});
}else{
	$('.preHeader').hide();
	$(document).unbind('scroll');
}
})
//Select steps
$('#section-steps > div > div > div:nth-child(2) > div > ul > li').on('click',function(){
	$('#section-steps > div > div > div:nth-child(2) > div > ul > li').removeClass('active');
	$('#section-steps > div > div > div:nth-child(2) > div > ul > li:nth-child('+parseInt($(this).index()+1)+')').addClass('active');
	$('.v-border').css('opacity','0');
	console.log($(this).parent('li'))
	// $(this).parent('li').find('.v-border').css('opacity','1');    
	$('#tab1,#tab2,#tab3,#tab4').hide();
	$('#tab'+parseInt($(this).index()+1)+'').show();
});