$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
        }
    });
});

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".logo").addClass("active_logo");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".logo").removeClass("active_logo");
        }
    });
});