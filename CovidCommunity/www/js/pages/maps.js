let map, heatmap, friends;

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

  monroeville = {"lat": 40.4211798, "lng": -79.7881024}
  freeport = {"lat" : 40.6739543, "lng" : -79.6847703}
  clinton = {"lat" : 40.4913949, "lng" : -80.2973027}
  greentree = {"lat" : 40.415251, "lng" : -80.05222839999999}
  starjunction = {"lat" : 40.07096019999999, "lng" : -79.74785039999999}

  var hospital1 = {"lat" : 40.4548396, "lng" : -79.9391194}
  var hospital2 = {"lat" : 40.2643514802915, "lng" : -80.13376381970851}
  var hospitalIcon = "https://github.com/yliankuo/HackMIT2020/blob/master/CovidCommunity/www/img/Hospital%20Icon%20.png?raw=true"

  var brandonMarkerIcon = "https://github.com/yliankuo/HackMIT2020/blob/master/CovidCommunity/www/img/Map%20Marker%201.png?raw=true"
  var alexMarkerIcon = "https://github.com/yliankuo/HackMIT2020/blob/master/CovidCommunity/www/img/Map%20Marker%202.png?raw=true"
  var ianMarkerIcon = "https://github.com/yliankuo/HackMIT2020/blob/master/CovidCommunity/www/img/Map%20Marker%203.png?raw=true"
  var kishanMarkerIcon = "https://github.com/yliankuo/HackMIT2020/blob/master/CovidCommunity/www/img/Map%20Marker%204.png?raw=true"
  var mattMarkerIcon = "https://github.com/yliankuo/HackMIT2020/blob/master/CovidCommunity/www/img/Map%20Marker%205.png?raw=true"

  var hospital1Marker = new google.maps.Marker({position: hospital1, map: map, title: "Hospital 1", icon: {url: hospitalIcon, scaledSize: new google.maps.Size(50, 50)}});
  var hospital1Marker = new google.maps.Marker({position: hospital2, map: map, title: "Hospital 2", icon: {url: hospitalIcon, scaledSize: new google.maps.Size(50, 50)}});

  var brandon = new google.maps.Marker({position: monroeville, map: map, title: "Brandon", icon: {url: brandonMarkerIcon, scaledSize: new google.maps.Size(50, 50)}});
  var alex = new google.maps.Marker({position: freeport, map: map, title: "Alex", icon: {url: alexMarkerIcon, scaledSize: new google.maps.Size(50, 50)}});
  var ian = new google.maps.Marker({position: clinton, map: map, title: "Ian", icon: {url: ianMarkerIcon, scaledSize: new google.maps.Size(50, 50)}});
  var kishan = new google.maps.Marker({position: greentree, map: map, title: "Kishan", icon: {url: kishanMarkerIcon, scaledSize: new google.maps.Size(50, 50)}});
  var matt = new google.maps.Marker({position: starjunction, map: map, title: "Matt DeSoto", icon: {url: mattMarkerIcon, scaledSize: new google.maps.Size(50, 50)}});

  google.maps.event.addListener(brandon, 'click', handleBrandonLogic);
  google.maps.event.addListener(alex, 'click', handleAlexLogic);
  google.maps.event.addListener(kishan, 'click', handleKishanLogic);
  google.maps.event.addListener(ian, 'click', handleIanLogic);
  google.maps.event.addListener(matt, 'click', handleMattLogic);

  friends = [
    document.getElementById("brandon"),
    document.getElementById("alex"),
    document.getElementById("kishan"),
    document.getElementById("ian"),
    document.getElementById("matt")
  ]
}

function nullDisplay(x) {
  x.style.display = "none"
}

function handleBrandonLogic() {
  x = friends[0];

  for (y of friends) {
    y.style.display = "none";
  }
  
  x.style.display = "block";
}

function handleAlexLogic() {
  x = friends[1];

  for (y of friends) {
    y.style.display = "none";
  }
  
  x.style.display = "block";
}

function handleKishanLogic() {
  x = friends[2];

  for (y of friends) {
    y.style.display = "none";
  }
  
  x.style.display = "block";
}

function handleIanLogic() {
  x = friends[3];

  for (y of friends) {
    y.style.display = "none";
  }
  
  x.style.display = "block";
}

function handleMattLogic() {
  x = friends[4];

  for (y of friends) {
    y.style.display = "none";
  }
  
  x.style.display = "block";
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