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
 var kmlObject = ge.parseKml(kmlString);
 ge.getFeatures().appendChild(kmlObject);
 ge.getView().setAbstractView(kmlObject.getAbstractView());
}
);
    }

    function failureCB(errorCode) {
    }

    google.setOnLoadCallback(init);

