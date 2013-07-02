						<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
xmlns:kml="http://earth.google.com/kml/2.1">

						 <xsl:output method="xml" encoding="utf-8" indent="no"/>
						
						 <xsl:template match="/">
						    <xsl:apply-templates select="*"/>
						 </xsl:template>

<xsl:template match="*|@*|text()">
 <xsl:copy>
 <xsl:apply-templates select="*|@*|text()"/>
 </xsl:copy>
</xsl:template>

<xsl:template match="kml:*[count(./name)>0]">
 <xsl:copy>
  <xsl:attribute name="kml:uri">
   <xsl:value-of select="concat('http://hongkong/',name/text())"/>
  </xsl:attribute>
 <xsl:apply-templates select="*|@*|text()"/>
 </xsl:copy>
</xsl:template>

<xsl:template match='kml:Folder[not(name)]|kml:Box[not(name)]|kml:GroundOverlay[not(name)]|kml:Region[not(name)]|kml:LatLonBox|kml:Icon|kml:Lod|kml:LatLonAltBox'>
 <xsl:copy>
  <xsl:attribute name="kml:uri">
   <xsl:value-of select="concat('http://hongkong/',count(preceding::*))"/>
  </xsl:attribute>
 <xsl:apply-templates select="*|@*|text()"/>
 </xsl:copy>
</xsl:template>

</xsl:stylesheet>
						
