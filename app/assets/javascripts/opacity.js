 $(document).ready(function() {
      if (screen.width > 781) {
            $(window).scroll(function () {
                  var scrollTop = $('body').scrollTop(),
                      chngOpacity = 1 - (scrollTop/800);
                  $('#top-title').css('opacity', chngOpacity);
            });
      } else if(screen.width > 480) {
            $(window).scroll(function () {
                  var scrollTop = $('body').scrollTop(),
                      chngOpacity = 1 - (scrollTop/200);
                  $('#top-title').css('opacity', chngOpacity);
            });
      } else {
            $(window).scroll(function () {
                  var scrollTop = $('body').scrollTop(),
                      chngOpacity = 1 - (scrollTop/100);
                  $('#top-title').css('opacity', chngOpacity);
            });
      }
  });