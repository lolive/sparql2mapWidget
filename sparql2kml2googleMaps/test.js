$(document).ready(function() {
sparqlQueryJson(
myquery,
'http://localhost:9005/sparql/',
function(res){
 parseN3(res);
 var kmlString=(new XMLSerializer()).serializeToString(document.getElementById('kml')).replace(/groundoverlay/g,'GroundOverlay');
 var kmlString2=' <kml xmlns="http://earth.google.com/kml/3.2"> <document> <GroundOverlay data-qrepeat="GroundOverlay file:///home/lolive/RDF2KML/hongKong.kml.pretty.n3#GroundOverlay"> <icon data-qrepeat="icon GroundOverlay|file:///home/lolive/RDF2KML/hongKong.kml.pretty.n3#hasicon"> <href>http://localhost/TerraColor_Hong_Kong_15m_1024_64_kmz_L4_4_1.jpg</href> </icon> <latlonbox data-qrepeat="latlonbox GroundOverlay|file:///home/lolive/RDF2KML/hongKong.kml.pretty.n3#haslatlonbox"> <north data-qtext="html latlonbox|file:///home/lolive/RDF2KML/hongKong.kml.pretty.n3#north">22.20009844226043700</north> <south data-qtext="html latlonbox|file:///home/lolive/RDF2KML/hongKong.kml.pretty.n3#south">22.05796724226043500</south> <east data-qtext="html latlonbox|file:///home/lolive/RDF2KML/hongKong.kml.pretty.n3#east">113.67256904815704000</east> <west data-qtext="html latlonbox|file:///home/lolive/RDF2KML/hongKong.kml.pretty.n3#west">113.53043784815704000</west> </latlonbox> </GroundOverlay> </document> </kml>';

 parser.parseKmlString(kmlString);
 //parser.parse(['kml/test.kml']);
}
);

});
