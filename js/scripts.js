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

    }, 500);

    
    getPromoHeadPosition();


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

                }, 500);

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

            }, 500);

        }                

      }

    });




    // --------------------------------------------------------


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
