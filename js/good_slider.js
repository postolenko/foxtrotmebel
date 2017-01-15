$(document).ready(function() {

	$(function() {

		var bigPhotoPath = "good_slider/big_photos/";
		var previewPhotoPath = "good_slider/preview/";


		$(".miniature-box").click( function() {

			var miniatureIndex = $(".miniature-box").index(this);

			var srcVal = $(".miniature-box:eq("+ miniatureIndex +") img").attr("src");

			var indexOfSlash = srcVal.lastIndexOf("/");

			var nameFile = srcVal.slice(indexOfSlash + 1);

			console.log(nameFile);

			$(".big_photo").css({"opacity" : .3});

			$(".big_photo").attr("src", bigPhotoPath + nameFile);

			$(".big_photo").css({"opacity" : 1});

		});


		$(".zoom-in").click(function() {

			$(".preview-slide").fadeIn(300);

			var bigPhotoSrc = $(".big_photo").attr("src");

			var indexOfSlashBigPhoto = bigPhotoSrc.lastIndexOf("/");

			var nameFileBigPhoto = bigPhotoSrc.slice(indexOfSlashBigPhoto + 1);

			$(".preview-img").attr("src", previewPhotoPath + nameFileBigPhoto);

		});

		$(".preview-bg, .zoom-out").click(function() {

			$(".preview-slide").fadeOut(300);

		});



	});

});