(function($) {

	function ActivateSlides() {
		var slides = $('.slides-wrap');

		slides.slick({
			dots: true,
			autoplay: false,
			arrows: true
		});
	}

	ActivateSlides();
})(jQuery);