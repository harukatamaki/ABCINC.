$(function () {
  $('.slider').slick({
  autoplaySpeed: 3600,
  speed: 3500,
  cssEase: 'linear',
  autoplay: true,
  infinite: true,
  waitForAnimate: false,
  cssEase: 'linear',
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<div class="slick-prev"><</div>',
  nextArrow: '<div class="slick-next">></div>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
})


