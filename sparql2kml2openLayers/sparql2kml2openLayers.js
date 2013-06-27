var map = new OpenLayers.Map('map');

var wms = new OpenLayers.Layer.WMS(
  "OpenLayers WMS",
  "http://vmap0.tiles.osgeo.org/wms/vmap0",
  {'layers':'basic'} );
map.addLayer(wms);

   

sparqlQueryJson(
myquery,
'http://localhost:9005/sparql/',
function(res){
 parseN3(res);
 var kmlString=(new XMLSerializer()).serializeToString(document.getElementById('kml'));
 var vectorLayer = new OpenLayers.Layer.Vector("Overlay");
 var format = new OpenLayers.Format.KML({
    });
 feature = format.read(kmlString);
 vectorLayer.addFeatures(feature);
 map.addLayer(vectorLayer);
}
);
