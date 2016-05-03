window.jQuery = $ = require('jquery')

/**
 * Init Dependencies
 */
var carousel = require('./vendor/module')
var animate = require('./vendor/animate')

$(window).on('load', function(){
	carousel()
	animate()
})

$(window).on('load resize', function(){
	var wancho = $(window).width(),
			walto = $(window).height()

	$('.header').css('height', walto)
	if(wancho > 768){
		$('.header-banner').css('height', walto - 120)
	}
	if(wancho <= 768){
		$('.header-banner').css('height', walto - 60)
	}
	if(wancho <= 540){
		$('.header-banner').css('height', walto)
	}

	/**
	 * Scrolling section
	 */
	$anchor = $('.Anchor');

	$anchor.on('click', function() {

		if ($(this).closest('li').length) {
			$anchor.closest('li').removeClass('is-selected')
			$(this).parent().addClass('is-selected');
		}

		var $el = $(this)
		id = $el.attr('href')

		$('html, body').animate({
				scrollTop: $(id).offset().top - 50
		}, 500)
	
		return false
	});

	
})