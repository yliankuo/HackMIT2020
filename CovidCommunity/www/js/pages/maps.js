let map, heatmap;

function initMap() {
  var styles = [
    {
      "featureType": "administrative.province",
      "elementType": "geometry.stroke",
      "stylers": [
        { "visibility": "on" },
        { "weight": 5 },
        { "color": "#24b0e2" }
      ]
    },
    {
      "featureType": "administrative_area_level_2",
      "elementType": "geometry.stroke",
      "stylers": [
        { "visibility": "on" },
        { "weight": 2.5 },
        { "color": "#24b0e2" }
      ]
    },{
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        { "visibility": "off" }
      ]
    },{
      "featureType": "administrative.locality",
      "elementType": "geometry.stroke",
      "stylers": [
        { "visibility": "on" },
        { "weight": 5 },
        { "color": "#24b0e2" }
      ],
    },{
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
        { "visibility": "off" }
      ]
    }
  ];

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    scaleControl: false,
    styles:styles,
    center: { lat: 40.4450813, lng: -80.0087746 },
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false
  });
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
    opacity: 0.8
  });

  const gradient = [
    "rgba(0, 255, 255, 0)",
    "rgba(0, 255, 255, 1)",
    "rgba(0, 191, 255, 1)",
    "rgba(0, 127, 255, 1)",
    "rgba(0, 63, 255, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(0, 0, 223, 1)",
    "rgba(0, 0, 191, 1)",
    "rgba(0, 0, 159, 1)",
    "rgba(0, 0, 127, 1)",
    "rgba(63, 0, 91, 1)",
    "rgba(127, 0, 63, 1)",
    "rgba(191, 0, 31, 1)",
    "rgba(255, 0, 0, 1)"
  ];
  heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
  heatmap.set("radius", heatmap.get("radius") ? null : 25);

  monroeville = {lat: 40.4211798, lng: -79.7881024}
  freeport = {"lat" : 40.6739543,"lng" : -79.6847703}
  clinton = {"lat" : 40.4913949,
  "lng" : -80.2973027}
  greentree = {"lat" : 40.415251,
  "lng" : -80.05222839999999}
  starjunction = {"lat" : 40.07096019999999,
  "lng" : -79.74785039999999}
  var marker1 = new google.maps.Marker({position: monroeville, map: map, title: "Chickennn"});
  var marker2 = new google.maps.Marker({position: freeport, map: map, title: "Kishannn"});
  var marker3 = new google.maps.Marker({position: clinton, map: map, title: "Kishannn"});
  var marker4 = new google.maps.Marker({position: greentree, map: map, title: "Kishannn"});
  var marker5 = new google.maps.Marker({position: starjunction, map: map, title: "Kishannn"});

}

// Surrounding county data (Allegheny)
function getPoints() {
  return [
    {location: new google.maps.LatLng(40.4450813, -80.0087746), weight: 1},// Allegheny
    {location: new google.maps.LatLng(40.6834649, -80.32338489999999), weight: 0.157}, // Beaver
    {location: new google.maps.LatLng(40.8611755, -79.89533279999999), weight: 0.084}, // Butler
    {location: new google.maps.LatLng(40.8790518, -79.4703885), weight: 0.0349}, // Armstrong
    {location: new google.maps.LatLng(40.6800489, -78.974649), weight: 0.1755}, // Westmoreland
    {location: new google.maps.LatLng(39.9272324, -79.6502105), weight:0.0659}, // Fayette
    {location: new google.maps.LatLng(39.8113005, -80.1875065), weight: 0.0143}, // Greene
    {location: new google.maps.LatLng(40.17396, -80.24617139999999), weight: 0.1095}, // Washington
  ];
}