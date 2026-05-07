'use strict'

jQuery(window).on('scroll', function() {
  if(150 < jQuery(this).scrollTop()){
    jQuery('.header').addClass('change-color');
  } else {
    jQuery('.header').removeClass('change-color');
  }
});