						<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
xmlns:kml="http://earth.google.com/kml/2.1">

						 <xsl:output method="text" encoding="utf-8" indent="no"/>
						
						 <xsl:template match="/">
						    <xsl:apply-templates select="*"/>
						 </xsl:template>

<xsl:template match="kml:Folder">
<!--Data-->
<xsl:param name="beforeText">
 <xsl:when test="not(kml:name)">
  <xsl:value-of select=" [ "/> 
 </xsl:when>
 </xsl:param>
<xsl:param name="afterText">
 <xsl:choose>
 <xsl:when test="not(kml:name)">
  <xsl:value-of select=" ] "/> 
 </xsl:when>
 <xsl:otherwise>
 <xsl:value-of select=" . "/>
 </xsl:otherwise>
 </xsl:choose>
 </xsl:param>
<xsl:param name="indentLevel">_</xsl:param>
<xsl:variable name="myName">
 <xsl:if test="kml:name">
  <xsl:value-of select="concat('&lt;',kml:name,'&gt;')"/>
 </xsl:if>
 </xsl:variable> 
<!--/Data-->

<!--Code-->
<xsl:value-of select="concat($indentLevel, $beforeText, $myName, ' a :', local-name(.) , ' ; ')"/> 
<xsl:apply-templates select="*" mode="ref">
 <xsl:with-param name="indentLevel" select="concat('_',$indentLevel)"/>
 </xsl:apply-templates>
<xsl:value-of select="$afterText"/>
<!--/Code-->

</xsl:template>

<xsl:template match="kml:*[name]" mode="ref">
<xsl:apply-templates select="*"/>
</xsl:template>
</xsl:stylesheet>
						
