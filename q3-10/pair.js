var boysarr = require("./boycreate.js");
var girlsarr = require("./girlcreate.js");
var fs = require("fs");
/**function to check minimum attractiveness conditions , budget conditions and log committed couples to log.txt file  */
function driver()
 {
   
     var k = 0;
     
     for(k=0;k<7;k++)
     {
         var j=0;
    while(j<4)
    {
        if(girlsarr[j].committed=="false")
        {
        if(boysarr[k].minval<girlsarr[j].attractiveness)
        {
            if(boysarr[k].budget<=girlsarr[j].maintenance)
            {
                boysarr[k].committed="true";
                boysarr[k].girlname="g"+j;
                girlsarr[j].boyname="b"+k;
                girlsarr[j].committed="true";
                break;
            }
            else
            j++;
        }
        else
        j++;
    }
    else
    j++;
}
     }
     
for(i=0;i<7;i++)
{
    if(boysarr[i].committed=="true")
    {
        var x = boysarr[i].name+" is dating "+boysarr[i].girlname + "\n";
        //console.log(x);
        fs.appendFile("./log.txt",x,function(err){
            if(err)
            return console.log("error detected");
        });
}
        
}
 }
 driver();
 module.exports = {
     boysarr,
 girlsarr} ;