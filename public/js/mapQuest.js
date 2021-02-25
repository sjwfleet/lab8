function initMap() {
	L.mapquest.key = 'zIOd8y1RK1NIyhbn3Hd6TndmraohVQei';

// 'map' refers to a <div> element with the ID map
var map = L.mapquest.map('map', {
  center: [32.87877975751717, -117.23591115434338],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});

L.marker([32.88, -117.236]).addTo(map);
}