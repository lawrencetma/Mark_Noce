// Scroll Click event handler for welcome button
$(document).on('click', 'a[href^="#"]', function(e) {
  var target = $( $(this).attr('href') );
  if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: target.offset().top
      }, 2000);
  }
})