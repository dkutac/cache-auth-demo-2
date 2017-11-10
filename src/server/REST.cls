Class API.REST Extends %CSP.REST
{

XData UrlMap [ XMLNamespace = "http://www.intersystems.com/urlmap" ]
{
<Routes>
<Route Url="/" Method="GET" Call="GetVersion" Cors="true" />
<Route Url="/public" Method="POST" Call='GetDealsPublic' Cors="true" />
<Route Url="/private" Method="POST" Call='GetDealsPrivate' Cors="true" />
</Routes>
}

ClassMethod GetVersion() As %Status
{
	w "{ ""version"":"""_$zv_""" }"
	return $$$OK
}

ClassMethod GetDealsPublic() As %Status
{
	return ..GetDeals("public")
}

ClassMethod GetDealsPrivate() As %Status
{
	return ..GetDeals("private")
}

ClassMethod GetDeals(pType As %String) As %Status
{
	#dim %response as %CSP.Response
	#dim e as %Exception.AbstractException
	set %response.ContentType="application/json"
	
	#define APP	"ANG RESOURCES"
	#dim tSC as %Status = $$$OK
	try {
		set reason=..#HTTP500INTERNALSERVERERROR
		if pType="private" {
			/* common check */
			// extract access token
			set accessToken=##class(%SYS.OAuth2.AccessToken).GetAccessTokenFromRequest(.tSC)		
			// decode token data into JSON object
			$$$THROWONERROR(tSC,##class(%SYS.OAuth2.AccessToken).GetIntrospection($$$APP,accessToken,.jsonObjectAT))

			/* service specific check */
			// check whether the request is asking for proper scope for this service
			if '(jsonObjectAT.scope["special-deals") set reason=..#HTTP404NOTFOUND throw
						
			/* finally */
			// validate signed access token (JWT)
			if '(##class(%SYS.OAuth2.Validation).ValidateJWT($$$APP,accessToken,,,.jsonObjectJWT,.securityParameters,.tSC)) {
				set reason=..#HTTP401UNAUTHORIZED
				$$$ThrowOnError(tSC)
			}
		}
		set tDeals=[]
		for i=1:1:($random(8)+2) {
			set tDeal={}
			set tDeal.id=$random(100)+1e3
			set tDeal.name=##class(%PopulateUtils).Product()
			set:pType="private" tDeal.name=$zcvt(tDeal.name,"U")
			set tDeal.description="a very nice, professionaly crafted "_$zcvt(tDeal.name,"L")
			set tDeal.originalPrice=##class(%PopulateUtils).Float(10,1000,2)
			set tDeal.salePrice=$j(tDeal.originalPrice * ($random(20)/10 + 0.5),0,2)
			do tDeals.%Push(tDeal)
		}
		write tDeals.%ToJSON()
	} catch (e) {
		set tSC=..ReportHttpStatusCode(reason,e.AsStatus())	
	}
	return $$$OK
}


}
