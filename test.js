var ge;
    google.load("earth", "1", {callback : function(){}});

    function init() {
      google.earth.createInstance('map3d', initCB, failureCB);
    }

    function initCB(instance) {
      ge = instance;
      ge.getWindow().setVisibility(true);
sparqlQueryJson(
myquery,
'http://localhost:9005/sparql/',
function(res){
 parseN3(res);
 var kmlString=(new XMLSerializer()).serializeToString(document.getElementById('kml'));
//google.earth.fetchKml(ge, 'http://temp.com/toto.kml', function(kmlObject) {
//      if (kmlObject)
//         ge.getFeatures().appendChild(kmlObject);
//});
//
//var kmlString = '<kml xmlns="http://www.opengis.net/kml/2.2"><Document>  <Camera>    <longitude>113.67256904815704000</longitude>    <latitude>22.34222964226043500</latitude>    <altitude>100039.629438</altitude>    <heading>0.0</heading>    <tilt>5</tilt>  </Camera>  <Placemark>    <name>Placemark from KML string</name>    <Point>      <coordinates>-122.448425,37.802907,0</coordinates>    </Point>  </Placemark>' + ' <GroundOverlay data-qrepeat="GroundOverlay file:///home/lolive/RDF2KML/hongKong.kml.pretty.n3#GroundOverlay"> <Icon data-qrepeat="Icon GroundOverlay|file:///home/lolive/RDF2KML/hongKong.kml.pretty.n3#hasIcon"> <href data-qtext="html Icon|file:///home/lolive/RDF2KML/hongKong.kml.pretty.n3#href">http://localhost/TerraColor_Hong_Kong_15m_1024_64_kmz_L4_3_1.jpg</href> </Icon> <LatLonBox data-qrepeat="LatLonBox GroundOverlay|file:///home/lolive/RDF2KML/hongKong.kml.pretty.n3#hasLatLonBox"> <north data-qtext="html LatLonBox|file:///home/lolive/RDF2KML/hongKong.kml.pretty.n3#north"> 22.34222964226043500</north> <south data-qtext="html LatLonBox|file:///home/lolive/RDF2KML/hongKong.kml.pretty.n3#south"> 22.20009844226043700</south> <east data-qtext="html LatLonBox|file:///home/lolive/RDF2KML/hongKong.kml.pretty.n3#east"> 113.67256904815704000</east> <west data-qtext="html LatLonBox|file:///home/lolive/RDF2KML/hongKong.kml.pretty.n3#west"> 113.53043784815704000</west> </LatLonBox> </GroundOverlay></Document></kml>';

         var kmlObject = ge.parseKml(kmlString);
         ge.getFeatures().appendChild(kmlObject);
         ge.getView().setAbstractView(kmlObject.getAbstractView());

}
);
    }

    function failureCB(errorCode) {
    }

    google.setOnLoadCallback(init);

