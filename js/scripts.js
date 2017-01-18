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

    var promoSlideCount = $(".promo-slide").length - 1;

    var promoSlideCountIndex;

    var promoSlideWidth;
    var promoSlideHeight;

    var promoWidthImg;
    var promoHeightImg;

    var positionInterval;

    // ---------------------------------------------------
   

    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });

    getPromoSlideImgSize();


    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});


        // ----------------------------------------------------------------------------

        // clearTimeout(positionInterval);

        getImgPromoSlidePosition();


        getPromoHeadPosition();

        getPromoSlideImgSize();

        // getPromoSlideImgPosition();

        getMiniatureSize();

    });

    // setTimeout(function() {

        getImgPromoSlidePosition();

    // }, 500);

    
    getPromoHeadPosition();

    

    // getPromoSlideImgPosition();

    getMiniatureSize();


    // --------------------------------------------------------

    var linkAttr;

    var indexMainNavLink

    $(".main-nav-link.with-inner-nav").bind({

      mouseenter: function() {

        $(this).addClass("active");

        linkAttr = $(this).attr("data-link");

        console.log(linkAttr);

        if( $(this).hasClass("active") ) {

            $(".main-nav-inner-links").css({"top" : $(this).outerHeight(true) + "px"});

            $('[data-link = inner-'+ linkAttr+']').addClass("active");

        }

      }, mouseleave: function() {

            setTimeout(function() {

                if( $('[data-link = inner-'+ linkAttr+']').hasClass("show") ) {

                    return true;

                } else {

                    $(".main-nav-link.with-inner-nav").removeClass("active");

                    $('[data-link = inner-'+ linkAttr+']').removeClass("show, active");

                }

            }, 200);

      }

    });

    $(".main-nav-inner-links .inner-nav-box").bind({

        mouseenter: function() {

            if( $(this).attr("data-link") == "inner-"+ linkAttr ) {

                $(this).addClass("show");

            }

        }, mouseleave: function() {

            $(this).removeClass("show");

            $('[data-link = inner-'+ linkAttr+']').removeClass("active");

            $(".main-nav-link.with-inner-nav").removeClass("active");

        }

    });


    // --------------------------------------------------------

    $(function() {

        $(".show-search-btn").bind({

            mouseenter: function() {

            $(this).addClass("active");

            $(".search-form-box").fadeIn(300);

            $(".search-form-box").css({"top" : $(".show-search-btn").outerHeight(true) + "px" })

            },  mouseleave: function() {

                setTimeout(function() {

                    if( $(".search-form-box").hasClass("show") ) { 

                        return true;

                    } else {

                        $(".search-form-box").fadeOut(300);

                        $(".show-search-btn").removeClass("active");

                    }

                }, 400);

            }

        });

    });


    $(".search-form-box").bind({

      click: function() {
        $( this ).addClass( "fixed" );
      },

      mouseenter: function() {
        $( this ).addClass( "show" );
      },

      mouseleave: function() {

        if( $( this ).hasClass( "fixed" ) ) {

            return true;

        } else  if( $(".search-inpt").val() == "") {

            $( this ).removeClass( "show" );

            setTimeout(function() {
                    
                    $(".search-form-box").fadeOut(300);

            }, 400);

        }                

      }

    });


    // --------------------------------------------------------

    $(".respmenubtn").click(function() {

        if( $(".resp-nav").is(":hidden") ) {

            $(this).addClass("respmenubtn-active");

            $(".resp-nav").fadeIn(200);

            $(".resp-nav").css({"top" : $(".header-row-1").outerHeight(true) + "px",
                                "height" : ( $(window).height() - $(".header-row-1").outerHeight(true) ) + "px" });

            $(".header-row-1").addClass("resp");

        } else if( $(".resp-nav").is(":visible") ){

            $(this).removeClass("respmenubtn-active");

            $(".resp-nav").fadeOut(200);

            $(".header-row-1").removeClass("resp");

        }


    });

    


    // --------------------------------------------------------


        // var countPromoSlides = $(".promo-slide").length - 1;

        // var promoSlideIndex = 0;

        // var promoSlideWidth;
        // var slideImgWidth;

        function getImgPromoSlidePosition() {

            // positionInterval = setTimeout(function() {

            //     for( promoSlideIndex = 0; promoSlideIndex <= countPromoSlides; promoSlideIndex++ ) {

            //         promoSlideWidth = $(".promo-slide:eq("+ promoSlideIndex +")").outerWidth();

            //         slideImgWidth = $(".promo-slide:eq("+ promoSlideIndex +") img").outerWidth();

            //         if( slideImgWidth > promoSlideWidth ) {

            //             $(".promo-slide:eq("+ promoSlideIndex +") img").css({

            //                 "margin-left" : -( ( slideImgWidth - promoSlideWidth ) / 2 ) + "px"

            //             });

            //         }

            //     }

            // }, 400);

        }


        function getPromoSlideImgSize() {

            clearTimeout(positionInterval);

            // var promoSlideCount = $(".promo-slide").length - 1;

            // var promoSlideCountIndex;

            // var promoSlideWidth;
            // var promoSlideHeight;

            // var promoWidthImg;
            // var promoHeightImg;

            promoSlideCount = $(".promo-slide").length - 1;

            promoSlideCountIndex;

            promoSlideWidth;
            promoSlideHeight;

            promoWidthImg;
            promoHeightImg;

            positionInterval = setTimeout(function() {


                for( promoSlideCountIndex = 0; promoSlideCountIndex <= promoSlideCount; promoSlideCountIndex++ ) {

                    promoSlideWidth = $(".promo-slide:eq("+ promoSlideCountIndex +")").outerWidth();

                    promoSlideHeight = $(".promo-slide:eq("+ promoSlideCountIndex +")").outerHeight();

                    promoWidthImg = $(".promo-slide:eq("+ promoSlideCountIndex +") img").outerWidth();

                    promoHeightImg = $(".promo-slide:eq("+ promoSlideCountIndex +") img").outerHeight();

                    // console.log(promoSlideWidth +"  "+ promoSlideHeight +"  "+ promoWidthImg +"  "+ promoHeightImg +"  "+ promoSlideCountIndex);

                    // if( promoWidthImg > promoSlideWidth || promoHeightImg > promoSlideHeight ) {

                    //     $(".promo-slide:eq("+ promoSlideCountIndex  +") img").css({
                    //         "min-width" : 100 + "%",
                    //         "min-height" : 100 + "%"
                    //     });

                    //     console.log("1");

                    // }

                    if( promoHeightImg < promoSlideHeight || promoWidthImg < promoSlideWidth ) {

                        // $(".good-slider-big-photo img").css({
                        //     "min-width" : sliderBigPhotoWidth + "px",
                        //     "min-height" : sliderBigPhotoHeight + "px"
                        // });

                        $(".promo-slide:eq("+ promoSlideCountIndex  +") img").css({
                            "min-width" : promoSlideWidth + "px",
                            "min-height" : promoSlideHeight + "px"
                        });

                    }

                    $(".promo-slide:eq("+ promoSlideCountIndex +") img").css({

                        "margin-left" : -( ( promoWidthImg - promoSlideWidth ) / 2 ) + "px"

                    });

                    // if( promoWidthImg > promoSlideWidth ) {

                    //     $(".promo-slide:eq("+ promoSlideCountIndex +") img").css({

                    //         "margin-left" : -( ( promoWidthImg - promoSlideWidth ) / 2 ) + "px"

                    //     });

                    // }

                }


                // for( promoSlideIndex = 0; promoSlideIndex <= promoSlideCount; promoSlideIndex++ ) {

                //         promoSlideWidth = $(".promo-slide:eq("+ promoSlideIndex +")").width();

                //         slideImgWidth = $(".promo-slide:eq("+ promoSlideIndex +") img").outerWidth();

                //         if( slideImgWidth > promoSlideWidth ) {

                //             $(".promo-slide:eq("+ promoSlideIndex +") img").css({

                //                 "margin-left" : -( ( slideImgWidth - promoSlideWidth ) / 2 ) + "px"

                //             });

                //         }
                // }

            }, 1000);

        }


        // ----------------------------------------------------------------

        $(function() {

            $(".resp-pseudo-bottom").click(function () {

                $("body,html").animate({

                    scrollTop: $("#scroll_down_anchor").offset().top

                }, 1000);

                return false;

            });

        });

        // ----------------------------------------------------------------

        $(".close-popup, .popup-box-bg ").click(function() {

            $(".popup-box").fadeOut(300);

        });

        $(".img-material-box").click(function() {

            $(this).prev("input").click();

        });

        $(".to-top").click(function() {

            $(".mCSB_container").animate({"top" : 0 + "px"}, 350);

        });

        $(".reset-btn").click(function() {

            $(".popup input").removeAttr('checked');

            $(".popup input").removeAttr('checked');

            $('.popup select').val("0");

            $('.popup .count-elements-val').val("0");

        });

        // ----------------------------------------------------------------

        $(".count-elements button").click(function() {

            var countElementsInputIndex = $(this).parent(".count-elements").index(".count-elements");

            var countElementsVal = $(".count-elements-val:eq("+ countElementsInputIndex +")").val();

            if( $(this).hasClass("elem-minus-btn") && countElementsVal > 0 ) {

                countElementsVal--;

            } else if( $(this).hasClass("elem-plus-btn") ) {

                countElementsVal++;

            }

            $(".count-elements-val:eq("+ countElementsInputIndex +")").val(countElementsVal);

        });

        // ----------------------------------------------------------------


        function getPromoHeadPosition() {

            $(".promo-h").css({

                "top"  : ( $(".promo-block").outerHeight(true) - $(".promo-h").outerHeight(true) ) / 2  + "px",
                "left" : ( $(".promo-block").outerWidth(true) - $(".promo-h").outerWidth(true) ) / 2  + "px"

            });

        }


        function getMiniatureSize() {

            var miniaturesCount = $(".miniature-box").length - 1;

            var miniatureIndex;

            var miniatureWidth;
            var miniatureHeight;

            var miniatureWidthImg;
            var miniatureHeightImg;

            for( miniatureIndex = 0; miniatureIndex <= miniaturesCount; miniatureIndex++ ) {

                miniatureWidth = $(".miniature-box:eq("+ miniatureIndex  +")").width();

                miniatureHeight = $(".miniature-box:eq("+ miniatureIndex  +")").outerHeight(true);

                miniatureWidthImg = $(".miniature-box:eq("+ miniatureIndex  +") img").width();

                miniatureHeightImg = $(".miniature-box:eq("+ miniatureIndex  +") .miniature-img").outerHeight(true);

                if( miniatureHeightImg < miniatureHeight || miniatureWidthImg < miniatureWidth ) {

                    $(".miniature-box:eq("+ miniatureIndex  +") .miniature-img").css({
                        "min-width" : miniatureWidth + "px",
                        "min-height" : miniatureHeight + "px"
                    });

                }

            }


        }


});
