$(document).ready(function() {
sparqlQueryJson(
myquery,
'http://localhost:9005/sparql/',
function(res){
 parseN3(res);
 var kmlString=(new XMLSerializer()).serializeToString(document.getElementById('kml'));
 parser.parseKmlString(kmlString);
}
);

}
