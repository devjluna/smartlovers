window.jQuery = $ = require('jquery')
require('jquery-validation')
/**
 * Init Dependencies
 */
var carousel = require('./vendor/module')
var animate = require('./vendor/animate')
var compare = require('./vendor/compare')

$(function() {
	
	$('iframe').css('width','100%')

	$( window ).on('load resize', function() {
		var w = $( window ).width();

		if(w >= 1200){
			$('iframe').css('width','100%')
			$('iframe').css('height','349px')
		}else if(w >= 992){
			$('iframe').css('width','100%')
			$('iframe').css('height','323px')
		}else if(w >= 768){
			$('iframe').css('width','100%')
			$('iframe').css('height','380px')
		}else if(w >= 590){
			$('iframe').css('width','100%')
			$('iframe').css('height','350px')
		}else if(w >= 325){
			$('iframe').css('width','100%')
			$('iframe').css('height','280px')
		}else{
			$('iframe').css('width','100%')
			$('iframe').css('height','130px')
		}
	});

	/* Validate Product Form */
	$('#contract').validate({
		rules: {
			name: {
				required: true
			},
			mail: {
				required: true
			},
			date: {
				required: true
			},
			dni: {
				required: true,
				minlength: 8,
				maxlength: 8
			},
			phone: {
				required: true,
				minlength: 9,
				maxlength: 9
			},
			checkbox: {
				required: true
			}
		},
		errorPlacement: function() {
			return false
		},
		submitHandler: function(form) {
			console.log('enviar')
		}
	})

	$('#frm_service').validate({
		rules: {
			name: {
				required: true
			},
			lastname: {
				required: true
			},
			dni: {
				required: true,
				minlength: 8,
				maxlength: 8
			},
			repair: {
				required: true
			},
			phone: {
				required: true,
				minlength: 9,
				maxlength: 9
			},
			question: {
				required: true
			}
		},
		errorPlacement: function() {
			return false
		},
		submitHandler: function(form) {
			console.log('enviar')
		}
	})

	$('#contract-ren').validate({
		rules: {
			name: {
				required: true
			},
			dni: {
				required: true,
				minlength: 8,
				maxlength: 8
			},
			number:{
				required: true,
				minlength: 9,
				maxlength: 9
			},
			checkbox: {
				required: true
			}
		},
		errorPlacement: function() {
			return false
		},
		submitHandler: function(form) {
			console.log('enviar')
		}
	})

	$("input[name='compare[]']").on( "click", compare)

})

$(window).on('load', function(){	
	carousel()
	animate()

	$('#btn-submit').click(function(){
       $.ajax({
        dataType:'json',
        type:'post',
        url: site+'contact/validate',
        data:{
          name : $('#name').val(),
          lastname : $('#lastname').val(),
          phone : $('#phone').val(),
          dni : $('#dni').val(),
          mail : $('#mail').val(),
          model : $('#model').val(),
          plan : $('#plan').val()
        }
       })
       .success(function(data){

       })
       .fail(function(err){
           console.log(err);
       })
   })
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

global.soloLetras = require('./vendor/soloLetras');
global.soloNumeros = require('./vendor/soloNumeros');