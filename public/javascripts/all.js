/*
    project : San Son Wo
    author : Jason
    date : 2016-10-13
*/
$(document).ready(function () {
    // HOME : SWIPER
    if($('#homeSwiper').length>0){
        var homeSwiper = new Swiper ('#homeSwiper', {
            loop: true,
            autoplay:5000,
            prevButton:'#homeSwiper .prev',
            nextButton:'#homeSwiper .next'
        })
    }

    // HOME : Home Brands
    if($('#homeBrands').length>0){
        var homeBrands = new Swiper ('#homeBrands', {
            slidesPerView:6,
            spaceBetween:0,
            loop: true,
            autoplay:5000,
            prevButton:'.home-brands .prev',
            nextButton:'.home-brands .next'
        })
    }

    // ALL : BACK TO TOP
    if($('#b2t').length>0) {
        $('#b2t').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    // All : Images Thumbs
    if($('.useThumb').length>0) {
        $('.useThumb img').jqthumb({
            width: '100%',
            height: '100%'
        });
    }
});