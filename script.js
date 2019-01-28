$(document).ready(function() {
    $("iframe").each(function() {
        const width = $("#gallery").width();
        if ($(this).hasClass("wide")) {
            $(this).width(width);
            $(this).height(width * 0.625);
        } else if ($(this).hasClass("tall")) {
            $(this).height(0.8 * $(window).height());
            $(this).width(width);    
        }
        
    })
    const description = $("#description ol")
    let initialProjectDescription = 0
    if (description.length) {
        initialProjectDescription = description.offset().top
    }
    $("#description li").each(function(index) {
        if (index > 0) {
            $(this).addClass("hide");    
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
                    $(this).addClass("hide");
                })
                $("#description li").eq(index).removeClass("hide");
            }
        })
        
    })
});
