<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:eg="http://ns.example.org/"
  exclude-result-prefixes="xs"
  version="3.0">

  <xsl:param name="yah" select="false()"/>

  <xsl:template match="/" as="xs:boolean">
    <xsl:param name="yah" as="xs:boolean" select="$yah"/>

    <xsl:sequence select="$yah"/>
  </xsl:template>

  <xsl:template name="param-passer" as="xs:boolean">
    <xsl:param name="yah" as="xs:boolean" select="false()"/>

    <xsl:sequence select="$yah"/>
  </xsl:template>
</xsl:stylesheet>