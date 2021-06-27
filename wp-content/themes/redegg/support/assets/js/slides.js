(function($) {

	function ActivateSlides() {
		var slides = $('.slides-wrap');
		var slideNum = slides.find('.slide');
		var autoplay = slides.data('autoplay');
		var loop = slides.data('loop');
		var dots = slides.data('dots');
		var arrows = slides.data('arrows');

		// activate slider if slide total is greater than 1
		if (slideNum.length > 1) {
			slides.slick({
				dots: dots,
				autoplay: autoplay,
				arrows: arrows,
				infinite: loop,
				prevArrow: '<button class="slick-prev new-slick-prev"><i class="bi bi-chevron-left"></i></button>',
				nextArrow: '<button class="slick-next new-slick-next"><i class="bi bi-chevron-right"></i></button>'
			});
		}
	}

	ActivateSlides();
})(jQuery);