$(document).ready(function() {
	$(window).scroll(function() {
		const yLocation = $(window).scrollTop();
    	if (yLocation < $("#contact-wrapper").offset().top - 50) {
    		$("#carousel-control").fadeIn();
    	} else if (yLocation >= $("#contact-wrapper").offset().top - 50) {
    		$("#carousel-control").fadeOut();
    	}
	})
	$("#contact-wrapper").height($(window).height() - 30)
	carouselHeight = $(window).height() - 150
	$("#carousel").height(carouselHeight)
	$(window).resize(function() {
		$("#contact-wrapper").height($(window).height() - 30)
		carouselHeight = $(window).height() - 150
		$("#carousel").height(carouselHeight)
	})

	$("#contact-link").click(function(e) {
		e.preventDefault();
		$([document.documentElement, document.body]).animate({
		        scrollTop: $("#contact-wrapper").offset().top - 20
		    }, 1000);
		$("#carousel").addClass("transparent");
	});

	$("#main-title").click(function(e) {
		e.preventDefault();
		$([document.documentElement, document.body]).animate({
		        scrollTop: 0
		    }, 1000);
		$("#carousel").removeClass("transparent");
	});

	const carouselItems = $('#carousel .item');
	const left = $('#left-control');
	const right = $('#right-control');

	function scrollLeft(e) {
		e.preventDefault();
		e.stopPropagation();
		let newCur = 0;
		carouselItems.each(function(i, el) {
			if ($(el).hasClass('left')) {
				newCur = i;
			}
			$(el).removeClass('left right cur');
			$(el).removeClass('none first last').addClass('none');
		})

		if (newCur != 0) {
			$(carouselItems[newCur-1]).addClass('left');
			$(carouselItems[newCur-1]).removeClass('none');
		} else {
			$(carouselItems[carouselItems.length - 1]).addClass('left');
			$(carouselItems[carouselItems.length - 1]).removeClass('none');
		}
		$(carouselItems[newCur]).addClass('cur');
		$(carouselItems[newCur]).removeClass('none');
		$(carouselItems[newCur+1]).addClass('right');
		$(carouselItems[newCur+1]).removeClass('none');
		if (newCur == carouselItems.length - 1) {
			$(carouselItems[0]).addClass('right');
			$(carouselItems[0]).removeClass('none');
		}
		right.attr('href','#')
	}

	function scrollRight(e) {
		e.preventDefault();
		e.stopPropagation();

		let newCur = carouselItems.length - 1;
		carouselItems.each(function(i, el) {
			if ($(el).hasClass('right')) {
				newCur = i;
			}
			$(el).removeClass('left right cur');
			$(el).removeClass('none first last').addClass('none');
		})

		if (newCur != carouselItems.length - 1) {
			$(carouselItems[newCur+1]).addClass('right');
			$(carouselItems[newCur+1]).removeClass('none');
		} else {
			$(carouselItems[0]).addClass('right');
			$(carouselItems[0]).removeClass('none');
		}
		$(carouselItems[newCur]).addClass('cur');
		$(carouselItems[newCur]).removeClass('none');
		$(carouselItems[newCur-1]).addClass('left');
		$(carouselItems[newCur-1]).removeClass('none');

		if (newCur == 0) {
			$(carouselItems[carouselItems.length - 1]).addClass('left');
			$(carouselItems[carouselItems.length - 1]).removeClass('none');
		}
		left.attr('href','#')
	}
    left.click(scrollLeft);
    right.click(scrollRight);
})
