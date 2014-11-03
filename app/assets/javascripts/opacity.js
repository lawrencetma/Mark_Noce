 $(document).ready(function() {

      //attach some code to the scroll event of the window object
      //or whatever element(s) see http://docs.jquery.com/Selectors
      $(window).scroll(function () {
            var height = $('body').height();
            var scrollTop = $('body').scrollTop();
            var opacity = 1;


            opacity = 1 - (scrollTop/700)

            $('#top-title').css('opacity', opacity);
      });
  });