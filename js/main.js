//start top to back code
$(document).ready(function () {



    var a = $('.top');
    var b = $('#header-top');
    var c = $('#header-top').offset().top;
    

    $(window).on('scroll', function () {
        var d = $(this).scrollTop();
        if (c < d) {

            b.addClass('sticky');
        } else {
            b.removeClass('sticky');
        }
    });
    //    sticky_menu code

    a.on('click', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 2000);
    });

    $(window).on('scroll', function () {
        var g = $(this).scrollTop();
        if (g != 0) {
            a.fadeIn();
        } else {
            a.fadeOut();
        }
    });
    //end top to back code

    $('#banner').slick({
        dots: false,
        infinite: false,
        arrows: true,
        speed: 300,
        autoplaySpeed: true,
        autoplaySpeed: 300,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });
    //    banner slider code

    new WOW().init();
    //    wow.js plagin
});
