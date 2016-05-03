window.jQuery = $ = require('jquery')

/**
 * Init Dependencies
 */
var carousel = require('./vendor/module')
var animate = require('./vendor/animate')

$(window).on('load', function(){
  carousel()
  animate()
  $('.collapse').addClass('fadeInUp')
})

$(window).on('load resize', function(){
	var wancho = $(window).width(),
			walto = $(window).height()

	$('.header').css('height', walto)
	$('.header-banner').css('height', walto - 100)

	$('.stadium-article').hover(function(){
		$(this).find('.stadium-block').show()
	}, function() {
		$(this).find('.stadium-block').hide()
	})

  /*
   * Nav Scroll Full
  */
  $(window).scroll(function() {
    var t = $(window).scrollTop()
        nav = $('.navbar-collapse')

    if(t >= 163){
      nav.addClass('navbar-full').show('slow')
    }else{
      nav.removeClass('navbar-full').show('slow')
    }
  })

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

  /**
   * Banner section
   */
  revapi = jQuery('.tp-banner').revolution({
    delay:5000,
    startwidth:1170,
    startheight:400,
    hideThumbs:10,
    fullWidth:"off",
    fullScreen: "on",
    touchenabled:"on",
    onHoverStop:"off"
    //forceFullWidth:"on"
  });

  
})