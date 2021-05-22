if($(".slider-animate").length) $(".slider-animate").slick({
    autoplay: !0,
    speed: 800,
    lazyLoad: "progressive",
    fade: !0,
    dots: !1
}).slickAnimation();

if($(".product-slick-animated").length) $(".product-slick-animated").slick({
    autoplay: !0,
    speed: 1e3,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !0,
    lazyLoad: "progressive",
    fade: !0,
    asNavFor: ".animated-nav"
}).slickAnimation();

if($(".center-home-slider").length) $(".center-home-slider").slick({
    centerMode: !0,
    centerPadding: "100px",
    slidesToShow: 1,
    responsive: [{
        breakpoint: 769,
        settings: {
            arrows: !1,
            centerMode: !0,
            centerPadding: "0",
            slidesToShow: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            arrows: !1,
            centerMode: !0,
            centerPadding: "10px",
            slidesToShow: 1
        }
    }]
}).slickAnimation();