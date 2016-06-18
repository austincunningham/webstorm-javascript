/**
 * Created by austin on 18/06/2016.
 */
function initialize()
{
  const latlng = new google.maps.LatLng(52.254427, -7.185281);
  const mapOptions =
  {
    center: new google.maps.LatLng(52.254427, -7.185281),
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    zoom: 16,
  };
  const map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // place a marker
  const marker = new google.maps.Marker({
    map: map,
    draggable: true,
    position: latlng,
    title: 'Drag and drop on your property!',
  });

  // To add the marker to the map, call setMap();
  marker.setMap(map);
};
google.maps.event.addDomListener(window, 'load', initialize);