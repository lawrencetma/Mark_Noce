function adjustStyle(width) {
  width = parseInt(width);
  if (width <= 1024) {
    $("#homepage-background").addClass('background').removeClass('parallax');
  } else {
     $("#homepage-background").addClass('parallax').removeClass('background');
  }
}

$(document).ready(function() {
  adjustStyle($(this).width());
  $(window).resize(function() {
    adjustStyle($(this).width());
  });
});
$(document).on('page:load', function() {
  adjustStyle($(this).width());
  $(window).resize(function() {
    adjustStyle($(this).width());
  });
});