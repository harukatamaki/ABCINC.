$(function () {
  $('.slider').slick({
  autoplaySpeed: 3500,
  speed: 1200,
  cssEase: 'ease-in-out',
  autoplay: true,
  infinite: true,
  waitForAnimate: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  pauseOnHover: false,
  pauseOnFocus: false,
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


