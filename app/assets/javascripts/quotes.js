$(document).ready(function(){
    $(function(){
        $('#quote-slideshow p:gt(0)').hide();
        setInterval(function(){
          $('#quote-slideshow p:first-child').fadeOut(3000)
            .next('p').fadeIn(3000)
            .end().appendTo('#quote-slideshow');},
          9000);
    });
});
