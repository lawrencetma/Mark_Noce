$(document).ready(function(){
    $(function(){
        $('#quote-slideshow p:gt(0)').hide();
        setInterval(function(){
          $('#quote-slideshow p:first-child').fadeOut(2000)
            .next('p').fadeIn(2000)
            .end().appendTo('#quote-slideshow');},
          7000);
    });
});