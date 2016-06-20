/**
 * Created by austin on 20/06/2016.
 */
let map;
function initialize()
{
  const center = new google.maps.LatLng(52.254427, -7.185281);
  const mapOptions = {
    center: center,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  const mapDiv = document.getElementById('map-canvas');
  mapDiv.style.width = '600px';
  mapDiv.style.height = '400px';
  map = new google.maps.Map(mapDiv, mapOptions);

};

google.maps.event.addDomListener(window, 'load', initialize);