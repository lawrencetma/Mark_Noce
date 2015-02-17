function handleResponse(response) {
  console.log(response)
  var ready
  ready = function() {
    if(document.getElementById("blogger")){
      for(i=0; i<6; i++) {
      document.getElementById("blogger").innerHTML += '<a href="' + response.items[i].url + '" target="_blank">' + "<h1>" + response.items[i].title + "</h1>" + '</a>' + response.items[i].content + "<br>" + '<div class="center">' + response.items[i].updated + "<br>" + '<a href="' + response.items[i].url + '" target="_blank">Comments</a></div>';
      };
    };
  };
  $(document).ready(ready);
  $(document).on('page:load', ready);
}