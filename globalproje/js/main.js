$(document).ready(function () {
  // index category slider
  $('.categories-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    asNavFor: '.categories-slider-nav'
  });
  $('.categories-slider-nav').slick({
    slidesToShow: 9,
    slidesToScroll: 1,
    asNavFor: '.categories-slider',
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true
  });
  // brands slider 
  $('.brands-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 9,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true
  });
  // slider products
  $('.slider-products').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
  // product detail slider
  $('.product-image-slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    asNavFor: '.product-image-slider-nav'
  });
  $('.product-image-slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.product-image-slider',
    dots: false,
    arrows: false,
    focusOnSelect: true
  });
  // category mobile filter toggle
  $( "#mobile-filter-btn" ).click(function() {
    $( "#mobile-filter-area" ).slideToggle( "slow", function() {
    });
  });
});


