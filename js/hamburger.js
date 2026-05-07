$(".openbtn").click(function () {
  $(this).toggleClass('active');
  $("#h-menu").toggleClass('panelactive');
});

$("#h-menu a").click(function () {
  $(".openbtn").removeClass('active');
  $("#h-menu").removeClass('panelactive');
});