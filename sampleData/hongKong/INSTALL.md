First you need Saxon.
Then got to directory kml2rdf/ and type those commands:
saxon hongKong.kml xsl/urify.xsl > result/hongKongWithUri.kml
saxon result/hongKongWithUri.kml xsl/rdfify.xsl > result/hongKong.kml.n3 
cwm --n3 result/hongKong.kml.n3 > result/hongKong.kml.pretty.n3

you will recreate all the RDF files corresponding to HongKong maps.

Now, you have to import the RDF data into (for example) 4store.
Something like that should do the trick:

4s-backend-setup HongKong
4s-backend HongKong
4s-import HongKong result/hongKong.kml.pretty.n3 
4s-httpd -X -p 9005 HongKong 
