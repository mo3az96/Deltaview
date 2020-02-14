
$(document).ready(function () {
    new WOW().init();
    var swiper = new Swiper('.main-slider-sec .swiper-container', {
        effect: 'fade',
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: '.main-slider-sec .swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="fixall ' + className + '">0' + (index + 1) + '</span>';
            },
        },
    });
    var projects = new Swiper('#projects .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 29,
        loop: true,
        navigation: {
            nextEl: '#projects .swiper-button-next',
            prevEl: '#projects .swiper-button-prev',
        },
        pagination: {
            el: '#projects .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 320px
            0: {
                slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
            },
            // when window width is >= 1199px
            1200: {
                slidesPerView: 3,
            }
        }
    });
    var a = 0;
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 20) {
            $('header').addClass("fixed-header");
        } else {
            $('header').removeClass("fixed-header");
        }
        $(this).scrollTop() >= 500 ? $(".scroll-top").addClass("show-scroll") : $(".scroll-top").removeClass("show-scroll");

        if ($("div").hasClass("about-numbers")) {
            if (a == 0 && $(this).scrollTop() >= ($(".about-numbers").offset().top) - 1000) {
                $('.number span').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 1000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                console.log($(window).scrollTop());
                a++
            }
        }
    });
    $(".scroll-top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    });
    if ($(window).width() <= 767) {
        $(".about-head").unwrap();
        $(".about").wrap("<div class='container'></div>");
        $(".sec-head").wrap("<div class='xs-nav'></div>");
        $(".gallery .item-cont").unwrap();
        $(".input-row .input-label").unwrap();
        $(".gallery").addClass("swiper-container");
        $(".item-cont").addClass("swiper-slide");


        $('.menu-opner').click(function () {
            $('body').addClass('overflow');
            $('.xs-nav').fadeIn(400);
            $('.sec-head').addClass('nav-open');
        });
        $('.xs-nav').click(function () {
            $('body').removeClass('overflow');
            $('.xs-nav').fadeOut(500);
            $('.sec-head').removeClass('nav-open');
        });
        $('.sec-head').click(function (e) {
            e.stopPropagation();
        });
        $('.close-btn').click(function () {
            $('body').removeClass('overflow');
            $('.xs-nav').fadeOut(500);
            $('.sec-head').removeClass('nav-open');
        });

        var galleryswiper = new Swiper('.gallery-slider .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            navigation: false,
            pagination: {
                el: '.gallery-slider .swiper-pagination',
                clickable: true,
            },
        });
    }
});