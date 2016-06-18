/**
 * Created by austin on 18/06/2016.
 */
function initialize()
{
  const mapOptions =
  {
    center: new google.maps.LatLng(52.254427, -7.185281),
    zoom: 12,
  };
  const map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
};
google.maps.event.addDomListener(window, 'load', initialize);