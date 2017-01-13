$(document).ready(function() {

    //   preload
    // $(window).on('load', function () {

    //     setTimeout(function() {

    //         $(".preload-bg").fadeOut(500);

    //     }, 700);
  

    // });


    // ---------------------------------------------------

    var countPromoSlides = $(".promo-slide").length - 1;
    var promoSlideIndex = 0;
    var promoSlideWidth;
    var slideImgWidth;

    // ---------------------------------------------------



    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});


        // ----------------------------------------------------------------------------


        getImgPromoSlidePosition();
        getPromoHeadPosition();

    });


    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });


    setTimeout(function() {

        getImgPromoSlidePosition();

    }, 1000);

    
    getPromoHeadPosition();



        // var countPromoSlides = $(".promo-slide").length - 1;

        // var promoSlideIndex = 0;

        // var promoSlideWidth;
        // var slideImgWidth;

        function getImgPromoSlidePosition() {

            for( promoSlideIndex = 0; promoSlideIndex <= countPromoSlides; promoSlideIndex++ ) {

                promoSlideWidth = $(".promo-slide:eq("+ promoSlideIndex +")").outerWidth();

                slideImgWidth = $(".promo-slide:eq("+ promoSlideIndex +") img").outerWidth();

                if( slideImgWidth > promoSlideWidth ) {

                    $(".promo-slide:eq("+ promoSlideIndex +") img").css({

                        "margin-left" : -( ( slideImgWidth - promoSlideWidth ) / 2 ) + "px"

                    });

                }

            }

        }


        function getPromoHeadPosition() {

            $(".promo-h").css({

                "top"  : ( $(".promo-block").outerHeight(true) - $(".promo-h").outerHeight(true) ) / 2  + "px",
                "left" : ( $(".promo-block").outerWidth(true) - $(".promo-h").outerWidth(true) ) / 2  + "px"

            });

        }


});
