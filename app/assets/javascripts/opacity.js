 $(document).ready(function() {
      if (screen.width > 767) {
            $(window).scroll(function () {
                  var height = $('body').height();
                  var scrollTop = $('body').scrollTop();
                  var opacity = 1;
                  opacity = 1 - (scrollTop/600)
                  $('#top-title').css('opacity', opacity);
            });
      } else {
            $(window).scroll(function () {
                  var height = $('body').height();
                  var scrollTop = $('body').scrollTop();
                  var opacity = 1;
                  opacity = 1 - (scrollTop/40)
                  $('#top-title').css('opacity', opacity);
            });
      }

  });