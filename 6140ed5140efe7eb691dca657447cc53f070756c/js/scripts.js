
function initMap() {
  // The location of Uluru
  var uluru = {lat: 100.324619, lng: -100.555990};


  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: uluru, mapTypeId: 'roadmap',});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}


if(document.title == "Tanis' and Luke's Party - Location"){
    var newHightMap = $(".card").height()+$(window).height()+$("#map").height();
    $("html").height(newHightMap);
} else {
    var newHight = $(".card").height()+$(window).height();
    $("html").height(newHight);
}
