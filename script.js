$(document).ready(function() {

    $("#contact-wrapper").height($(window).height() - 80)

    $("#contact-link").click(function(e) {
    	e.preventDefault();
    	$([document.documentElement, document.body]).animate({
    	        scrollTop: $("#contact-wrapper").offset().top
    	    }, 1000);
    });

    $(window).scroll(function() {
    	const yLocation = $(window).scrollTop();
    	if (yLocation < $("#contact-wrapper").offset().top - 50) {
    		$("#carousel-control").fadeIn();
    	} else if (yLocation >= $("#contact-wrapper").offset().top - 50) {
    		$("#carousel-control").fadeOut();
    	}
    })
});
