$(document).ready(function() {
    const description = $("#description ol")
    let initialProjectDescription = 0
    if (description.length) {
        initialProjectDescription = description.offset().top
    }
    

    $(window).scroll(function() {
    	const yLocation = $(window).scrollTop();
    	if (yLocation < $("#contact-wrapper").offset().top - 50) {
    		$("#carousel-control").fadeIn();
    	} else if (yLocation >= $("#contact-wrapper").offset().top - 50) {
    		$("#carousel-control").fadeOut();
    	}

        if (yLocation > initialProjectDescription && yLocation + $("#description ol").height() < $("#contact-wrapper").offset().top - 100) {
            const offset = yLocation - initialProjectDescription
            $("#description ol").css('padding-top', offset)
        } else if (yLocation < initialProjectDescription) {
            $("#description ol").css('padding-top', 0)
        }
    })
});
