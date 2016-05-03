var carousel = function() {
	var owl = $('#owl-team');

	owl.owlCarousel({
		items: 3,
		loop:true,
		margin: 22,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},
			768:{
				items:3
			},
			1200:{
				items:4
			}
		}
	})
	$('.owl-next').click(function() {
		owl.trigger('next.owl.carousel', [300]);
	})
	$('.owl-prev').click(function() {
		owl.trigger('prev.owl.carousel', [300]);
	})
}

module.exports = carousel;