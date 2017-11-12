$(function () {


    $("#hom").click(function () {
        $("html, body").animate({
            scrollTop: $("#home").offset().top
        }, 1000);
    });

    $("#abou").click(function () {
        $("html, body").animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });

    $("#profile").click(function () {
        $("html, body").animate({
            scrollTop: $("#portfolio").offset().top
        }, 1000);
    });

    $("#cont").click(function () {
        $("html, body").animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });


});
