# PROJECT

This project builds a webpage: sparql2kml2googleEarth.html.
This page handles 3 GET parameters: long, lat and name.

 * long : is a longiture,
 * lat : is a latitide,
 * name : is a the display name of the place pointed by (lat, long).

If these 3 parameters are provided, the page queries the Landsat RDF dataset.
And retrieve all the Landsat photos for the place pointed by (lat, long).

It then displays a list of clickable items. 
Clicking an item will make the photo to appear in the GoogleEarth frame of the page.
And a list of Flickr images for that location.

All the HTML of this page embeds some RDFa tags, so you selections (which Landsat image is selected, which Flickr images are selected) can be extracted as RDF and saved somewhere.

Note: only flickrRibbon/ project is currently maintained. Other directories are proof of concepts with alternative map widgets (GoogleMaps is pretty ok, OpenLayers does not know how to display a groundoverlay with an icon inside it.) 

# INSTALL

## SERVER-SIDE

On the server-side, you just deploy the sparql2kml2googleEarth.html, the css/ and js/ directories
on any webserver.
Note: you need to update the URL of the SiTools in info.html (or update template work/templates/jade/info.jade and regenerate, cf work/README.md)
Note: you need to update the URL of the Sparqlendpoint in sparql2kml2googleEarth.html (or update template work/templates/jade/includes/landsatQueryDetails.jade and regenerate, cf work/README.md)

## CLIENT-SIDE

On the client-side (i.e the browser), you need to install the GoogleEarth plugin.
And be sure you can access the url: http://sitools.akka.eu:8889/sparql/ with your browser.

## DEV

The files sparql2kml2googleEarth.html and css/*.css are generated.
That job is done in the work/ directory.
For further information, please read work/README.md.
