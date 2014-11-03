function calcParallax(tileheight, speedratio, scrollposition) {
  //    by Brett Taylor http://inner.geek.nz/
  //    originally published at http://inner.geek.nz/javascript/parallax/
  //    usable under terms of CC-BY 3.0 licence
  //    http://creativecommons.org/licenses/by/3.0/
  return ((tileheight) - (Math.floor(scrollposition / speedratio) % (tileheight+1)));
}

window.onload = function() {

  window.onscroll = function() {
    var posX = (document.documentElement.scrollLeft) ? document.documentElement.scrollLeft : window.pageXOffset;
    var posY = (document.documentElement.scrollTop) ? document.documentElement.scrollTop : window.pageYOffset;

    var ground = document.getElementById('ground');
    var groundparallax = calcParallax(50, 12, posY);
    ground.style.backgroundPosition = "0 " + groundparallax + "px";

    var clouds = document.getElementById('front');
    var cloudsparallax = calcParallax(100, .5, posY);
    clouds.style.backgroundPosition = "0 " + cloudsparallax + "px";
  }
}