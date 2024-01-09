$(document).ready(function() {
    $("#toFooter").fadeIn();
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $("header").addClass("scrolled");
            $("#menu li ul").addClass("scrolled");
            $("#toTop").fadeIn();
            $("#toFooter").fadeOut();
        } else {
            $("header").removeClass("scrolled");
            $("#menu li ul").removeClass("scrolled");
            $("#toTop").fadeOut();
            $("#toFooter").fadeIn();
        }
    });

    $('.burger').on('click', function()
    {
        $('#menu').toggleClass('active');
        $('.burger').toggleClass('active');
    });
    });