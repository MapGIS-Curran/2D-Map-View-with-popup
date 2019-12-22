require([
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/geometry/Point",
  "esri/symbols/SimpleMarkerSymbol",
], function(Map, MapView,
      Graphic, Point, SimpleMarkerSymbol
) {
  
  var map = new Map({
    basemap: "hybrid"
  });
    
  var view = new MapView({
    container: "viewDiv",  
    map: map,
    center: [-9.0, 53.0],
    zoom: 7
  });

  var point = new Point({
    longitude: -9.055927,
    latitude: 53.272611
  });

  var markerSymbol = new SimpleMarkerSymbol({
    color: "red",
    style: "square",
    size: "8px",
  });
  
  var attributes = {
    Name: "Galway, Ireland",
  };
  
  var popupTemplate = {
    title: "{Name}",
    content: "With a population of 80,000, Galway is the sixth most populous city in Ireland, and was first settled in 1124."
  };

  var pointGraphic = new Graphic({
    geometry: point,
    symbol: markerSymbol,
    attributes: attributes,
    popupTemplate: popupTemplate
  });
  view.graphics.add(pointGraphic);
});