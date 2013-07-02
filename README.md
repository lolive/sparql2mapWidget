In one word:
Displaying geographic data contained in a SPARQL endpoint onto a map widget.
Pure client-side technologies.

Your part of the job:
 - feed your SPARQL endpoint with geographic data (info+example at sampleData/hongKong/INSTALL.md)
 - edit the SPARQL query in your index.html
 - edit the SPARQL url in your index.html
 - edit the KML template in your index.html (we currently use Distal as the template engine)

What the project does:
 - the SPARQL query is run, the result is fed into the KML template, the result KML is injected in the map Widget (GoogleEarth, GoogleMaps and eventually OpenLayers) 

Example:
we provide an example with hongKong data.
Open ./index.html in your browser.
