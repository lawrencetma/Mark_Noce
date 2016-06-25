function handleResponse(response) {
  var ready, counter = 0;
  ready = function() {
    if(document.getElementById("blogger")){
      for(i=counter; i<(counter+5); i++) {
      document.getElementById("blogger").innerHTML += '<a href="' + response.items[i].url + '" target="_blank">' + "<h1>" + response.items[i].title + "</h1>" + '</a>' + response.items[i].content + "<br>" + '<div class="center">' + response.items[i].updated + "<br>" + '<a href="' + response.items[i].url + '" target="_blank">Comments</a></div>';
      };
      counter = 0;
    };
    $("#blogNext").on('click', function(e){
      e.preventDefault();
      counter += 5;
      $(".blogFooter").remove();
      ready();
    });
  };
  $(document).ready(ready);
  $(document).on('page:load', ready);
}