function adjustStyle(width) {
  width = parseInt(width);
  if (width < 1000) {
    $("#homepage-background").addClass('background').removeClass('parallax');
  } else {
     $("#homepage-background").addClass('parallax').removeClass('background');
  }
}

$(function() {
  adjustStyle($(this).width());
  $(window).resize(function() {
    adjustStyle($(this).width());
  });
});