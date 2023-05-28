//Java script for google maps
let map, infoWindow;

function initMap(){
  
    const myLatLng = {lat: 51.19517018673943, lng: -3.4657533019415023};

    const map = new google.maps.Map(document.getElementById('map'),{
        zoom: 15,
        center: {lat: 51.19517018673943, lng: -3.4657533019415023},
        mapTypeId: 'satellite',
    });
   
    new google.maps.Marker({
      position: myLatLng,
      map,
      
    });
  }
    infoWindow = new google.maps.InfoWindow();

    

    


window.initMap = initMap;
