var kmlLayer;
var ge;
    google.load("earth", "1", {callback : function(){}});

    function init() {
      google.earth.createInstance('map3d', initCB, failureCB);
    }

    function initCB(instance) {
      ge = instance;
      ge.getWindow().setVisibility(true);
      ge.getLayerRoot().enableLayerById(ge.LAYER_BORDERS, true);
sparqlQueryJson(
myquery,
myendpoint,
function(res){
 parseN3(res);
 $('.satelliteImage').click(function() {
  var kmlString=(new XMLSerializer()).serializeToString(document.getElementById(this.attributes.href.value));
  var kmlObject = ge.parseKml(kmlString);
  if(kmlLayer)
     ge.getFeatures().removeChild(kmlLayer);
  ge.getFeatures().appendChild(kmlObject);
  ge.getView().setAbstractView(kmlObject.getAbstractView());
  kmlLayer = kmlObject;
 });
}
);
    }

    function failureCB(errorCode) {
    }

    google.setOnLoadCallback(init);

