						<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
xmlns:kml="http://earth.google.com/kml/2.1">

						 <xsl:output method="text" encoding="utf-8" indent="no"/>

<xsl:variable name="quote">"</xsl:variable>
						
						 <xsl:template match="/">
						    <xsl:apply-templates select="kml:*" mode="rdfType"/>
						    <xsl:apply-templates select="kml:*" mode="triple"/>
						 </xsl:template>


<xsl:template match="kml:Document/kml:Style" mode="rdfType"/>
<xsl:template match="kml:Document/kml:name" mode="rdfType"/>
<xsl:template match="kml:Document/kml:Style" mode="triple"/>
<xsl:template match="kml:Document/kml:name" mode="triple"/>

<xsl:template match="kml:*[@kml:uri]" mode="triple">
 <xsl:variable name="subject" select="@kml:uri"/>
 <xsl:for-each select="*[@kml:uri]">
 <xsl:value-of select="concat('&lt;', $subject ,'&gt;', ' :has', local-name(),' ' ,'&lt;', @kml:uri ,'&gt;')"/> . 
 </xsl:for-each>
 <xsl:for-each select="*[not(@kml:uri)]">
 <xsl:value-of select="concat('&lt;', $subject ,'&gt;', ' :', local-name(),' ' ,$quote, . ,$quote)"/> . 
 </xsl:for-each>
 <xsl:apply-templates select="*[@kml:uri]" mode="triple"/>
</xsl:template>

<xsl:template match='kml:*' mode="rdfType">
<xsl:if test="@kml:uri">
 <xsl:value-of select="concat('&lt;', @kml:uri ,'&gt;', ' a :', local-name(.))"/> . 
</xsl:if>
 <xsl:apply-templates select="kml:*" mode="rdfType"/>
</xsl:template>

</xsl:stylesheet>
						
