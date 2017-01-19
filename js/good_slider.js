$(document).ready(function() {

	var bigPhotoHeight;
    var sliderBigPhotoHeight;
    var bigPhotoWidth;
	var sliderBigPhotoWidth;

	// ----------------------------

	var bigPhotoPath;
	var previewPhotoPath;
	var miniatureIndex;
	var srcVal;
	var indexOfSlash;
	var nameFile;

	// ----------------------------

	var bigPhotoSrc;
	var indexOfSlashBigPhoto;
	var nameFileBigPhoto;

	// ----------------------------


    getBigSliderPhotoImg();


    $(window).resize(function() {

    	getBigSliderPhotoImg();

    });


	$(function() {

		bigPhotoPath = "good_slider/big_photos/";
		previewPhotoPath = "good_slider/preview/";


		$(".miniature-box").click( function() {

			miniatureIndex = $(".miniature-box").index(this);

			srcVal = $(".miniature-box:eq("+ miniatureIndex +") img").attr("src");

			indexOfSlash = srcVal.lastIndexOf("/");

			nameFile = srcVal.slice(indexOfSlash + 1);

			$(".good-slider-big-photo img.big_photo").attr("src", bigPhotoPath + nameFile);

			setTimeout(function() {

				getBigSliderPhotoImg();

			}, 70);

		});


		$(".zoom-in").click(function() {

			$(".preview-slide").fadeIn(300);

			bigPhotoSrc = $(".big_photo").attr("src");

			indexOfSlashBigPhoto = bigPhotoSrc.lastIndexOf("/");

			nameFileBigPhoto = bigPhotoSrc.slice(indexOfSlashBigPhoto + 1);

			$(".preview-img").attr("src", previewPhotoPath + nameFileBigPhoto);

		});

		$(".preview-bg, .zoom-out").click(function() {

			$(".preview-slide").fadeOut(300);

		});

	});


    function getBigSliderPhotoImg() {

       	bigPhotoHeight = $(".good-slider-big-photo img.big_photo").outerHeight(true);

       	sliderBigPhotoHeight = $(".good-slider-big-photo").height();

       	bigPhotoWidth = $(".good-slider-big-photo img.big_photo").outerWidth(true);

       	sliderBigPhotoWidth = $(".good-slider-big-photo").width();

        if( bigPhotoHeight < sliderBigPhotoHeight || bigPhotoWidth < sliderBigPhotoWidth ) {

            $(".good-slider-big-photo img.big_photo").css({
                "min-width" : sliderBigPhotoWidth + "px",
                "min-height" : sliderBigPhotoHeight + "px"
            });

        }

    }

});