$(document).on('ready', function() {
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
		autoplay: true,
		autoplaySpeed: 3000
      });
    });