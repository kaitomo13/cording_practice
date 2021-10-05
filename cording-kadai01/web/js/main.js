jQuery(function($){
  // navigation
  $('.humb').on('click', function(){
    $('.humb_line').toggleClass('active');
    $('body').toggleClass('fixed')
    $('.gnav').fadeToggle();
  });
});


