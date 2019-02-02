$(document).ready(function() {
    const width = $("#gallery").width();
    $(".wide").each(function() {
        $(this).width(width);
        $(this).height(width * 0.625);
    })
    $('.tall').each(function() {
        $(this).height(0.8 * $(window).height());
        $(this).width(width);    
    })
    $('.taller').each(function() {
        $(this).find("img").height(0.95 * $(window).height());
    })
    const description = $("#description ol")
    let initialProjectDescription = 0
    if (description.length) {
        initialProjectDescription = description.offset().top
    }
    $("#description li").each(function(index) {
        if (index > 0) {
            $(this).addClass("hidden");    
        }
    })

    $(window).scroll(function() {
        const descriptionWidth = description.width()
        if ($("#gallery ol li").last().height() < $(window).height()) {
            $("#gallery ol li").last().css("height", $(window).height());
        }
        const yLocation = $(window).scrollTop();

        if (yLocation > initialProjectDescription + 20 && yLocation + $("#description ol").height() < $("#contact-wrapper").offset().top) {
            const offset = yLocation - initialProjectDescription
            description.css('position', "fixed")
            description.css("width", descriptionWidth);
            description.css("top", 20);
        } else if (yLocation < initialProjectDescription + 20) {
            description.css('position', "relative")

        }
        $("#gallery ol li").each(function(index) {
            const offset = $(this).offset().top;
            if (yLocation >= offset) {
                $("#description li").each(function() {
                    $(this).addClass("hidden");
                })
                $("#description li").eq(index).removeClass("hidden");
            }
        })
        
    })
});
