jQuery(document).ready(function($) {
	// starting frame animation
	$('.frame').animate({"opacity":"1"}, 1000);

	// TOC
	var tocHidden = true;

	$('.closeToc').click(function(){

		if (tocHidden === true) {
			var tocWidth = $('.toc').width();
			$('.toc').animate({"left":"0"},400);
			tocHidden = false;
		} else {
						var tocWidth = $('.toc').outerWidth() * -1;

			$('.toc').animate({"left": ( tocWidth  + "px" ) },400);
			tocHidden = true;
		};	
	
	});

	$(window).resize(function(){
					var tocWidth = $('.toc').outerWidth() * -1;

			$('.toc').css({"left": ( tocWidth  + "px" ) });
			tocHidden = true;
	})




	$('.toc ul li a').click(function(event) {
		// pull the story url
		var thisUrl = $(this).attr('href');
		// hide the toc
		$('.toc').animate({"left":"-50%"},400,function(){
			// fade the current frame
			$(".frame").stop(true,true).fadeOut(500,function(){
				//bring in the fresh one
				$('.stage').load(thisUrl, function(){
					$('.frame').animate({"opacity":"1"}, 500);
				});
			});

			//reset this too
			tocHidden = true;
		});
		event.preventDefault();
		return false;
	});

	// Home frame height - kinda hacky
	var winheight = $(window).height();
	var homeframeheight = $('.homeFrame').height();
	if (winheight > homeframeheight) {
		$('.homeFrame').height(winheight);
	};


/*************************************************
	//experimental still
****/

	$('.pageUp').click(function() {
		// alert('yo');
		var scrollup = $(window).innerHeight();
		$('body, html').animate({scrollTop : ($('body, html').scrollTop() - scrollup) + "px" },500);
	});
		$('.pageDn').click(function() {
		// alert('yo');
		var scrollup = $(window).height();
		$('body, html').animate({scrollTop : ($('body, html').scrollTop() + scrollup) + "px" },500);
	});


// end doc ready yo
});

// the lovely CSS-Tricks smooth scrolling snippet
$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});