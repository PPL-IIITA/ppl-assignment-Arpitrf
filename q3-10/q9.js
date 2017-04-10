var arr1 = require("./gifting.js")
var boysarr = require("./boycreate.js");
var girlsarr = require("./girlcreate.js");
var fs = require("fs");

function bestk(girlsarr)
{
    girlsarr.sort(function(a, b) {
    return parseFloat(a.attractiveness) - parseFloat(b.attractiveness);
});
//var k = 
return girlsarr;

}

function driver()
{
    girlsarr1 = bestk(girlsarr);

}