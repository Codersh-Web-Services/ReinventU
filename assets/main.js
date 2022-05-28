function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
waitForElm('.product-wrap-slide').then((elm) => {

    $(".product-wrap-slide").slick({

        arrows: false,

        slidesToShow: 4,
        autoplay: false,
        responsive: [{

                breakpoint: 1000,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },

            {
                breakpoint: 576,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});




waitForElm('.hero-carousel').then((elm) => {
    $(".hero-carousel").slick({
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 8000,
        autoplay: true,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                dots: true,
                arrows: false
            }
        }]


    });

});
waitForElm('.fold-wrapper').then((elm) => {
    $(".fold-wrapper").slick({
        arrows: true,
        dots: false,

        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        autoplay: true,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                },
            },
        ]



    });
});

waitForElm('.desktop-apparel-img').then((elm) => {
    $(".desktop-apparel-img").slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,

                },
            },
        ]
        // adaptiveHeight: true


    });
});

waitForElm('.testimonial-slide').then((elm) => {

    $(".testimonial-slide").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});

waitForElm('.atheletes').then((elm) => {

    $(".atheletes").slick({
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                },
            },
        ],
    });
});
waitForElm('.testimonial-reviews').then((elm) => {

    $(".testimonial-reviews").slick({
        infinite: true,
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        responsive: [{
                breakpoint: 1192,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                },
            },


        ],
    });

});
waitForElm('.customers-review').then((elm) => {

    $(".customers-review").slick({
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        responsive: [{
                breakpoint: 1192,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});
waitForElm('.customers-review-test').then((elm) => {

    $(".customers-review-test").slick({
        infinite: true,

        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                },
            },
            {
                breakpoint: 1192,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                },
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                },
            },
        ],
    });
});
$(document).ready(function() {




    $('#size-chart-btn').on('click', function(event) {
        event.preventDefault();

        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
        }).magnificPopup('open');
    });

    $('#size-chart-btn-mobile').on('click', function(event) {
        event.preventDefault();

        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
        }).magnificPopup('open');
    });

    $('.minus').click(function() {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function() {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


});


$("a[href='#top']").click(function() {
    $("html, body").animate({
        scrollTop: 0
    }, "slow");
    return false;
});




//   if(window.location.pathname.includes("products")){
//   document.querySelector("#product_form_6962569937063 > shopify-payment-terms").shadowRoot.querySelector("#shopify-installments-content").style.fontSize = "14px"
//   }


//   var bundle__name = document.querySelectorAll("#ProductSection-product-template div.ComboSlide_picky-combo-slide-content_1e7bJ  div.ComboProductCard_card-info-wrap_bNw_Y > a");


//   for (let i = 0; i < bundle__name.length ; i++) {

//        if(bundle__name[i].innerHTML == " Miami Vice Skyline "){
// 		bundle__name[i].innerHTML = "White Shirt";
// 	}
//     else if(bundle__name[i].innerHTML == " Retro Miami Vice "){
// 	bundle__name[i].innerHTML = "black Shirt";
// 	}


//   }

waitForElm('div.ComboProductCard_card-info-wrap_bNw_Y').then((elm) => {
    var bundleoptions = document.querySelectorAll("div.ComboProductCard_card-info-wrap_bNw_Y")

    for (let i = 0; i < bundleoptions.length; i++) {
        if (bundleoptions[i].lastElementChild.childNodes[0].childNodes[2].innerText == 'Title Default Title  Default Title No elements found. Consider changing the search query.List is empty.') {

            bundleoptions[i].remove();
        }

    }

});

waitForElm('#ProductSection-product-template div.ProductOption_title_oEe3n').then((elm) => {
    var bundle_size_text = document.querySelectorAll("#ProductSection-product-template div.ProductOption_title_oEe3n");

    for (let i = 0; i < bundle_size_text.length; i++) {

        bundle_size_text[i].innerHTML = "Size:";


    }
});


waitForElm('.product-recommendations__inner > ul').then((elm) => {
    console.log('Element is ready');
    $(".product-recommendations__inner > ul").slick({
        infinite: false,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,

        adaptiveHeight: true,
        responsive: [{
                breakpoint: 1192,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                },
            },
        ],


    });
});




//  $(function() {
//             $(this).bind("contextmenu", function(e) {
//                 e.preventDefault();
//             });
//         }); 