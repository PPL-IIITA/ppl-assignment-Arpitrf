var bjson = require("./../data/boys.json");
var gjson = require("./../data/girls.json");
var pjson = require("./../data/gifts.json");
var fs = require("fs");

var arr1 = require("./gifting.js");
//var arr1.arr.girlsarr = require("./girlcreate.js");

/**
 * this is the couple class which creates an object defining a couple
 */
/**@param {string} boyname- name of the gift
 * @param {string} girlname- type of the gift
 * @param {integer} boyhap happiness of boy
 * @param {integer} girlhap happiness of girl
 * @param {integer} hap happiness of couple as a whole
 * @param {integer} comp compatibility of the couple
 *  */
class couple{
    constructor(boyname,girlname,boyhap,girlhap,hap,comp)
    {
        this.boyname = boyname;
        this.girlname = girlname;
        this.boyhap = boyhap;
        this.girlhap = girlhap;
        this.hap = hap;
        this.comp = comp;
    }
}
/**
 * function to calculate the happiness of couples
 */
 function happiness()
{
    couplesarr = new Array(50);
    var k = 0;
for(i=0;i<7;i++)
{
    if(arr1.arr.boysarr[i].committed=="true")
    {
        var ty = arr1.arr.boysarr[i].type;
        var gname = arr1.arr.boysarr[i].girlname;
        for(j=0;j<4;j++)
        {
            if(arr1.arr.girlsarr[j].name==gname)
            {
                gty=arr1.arr.girlsarr[j].type;
                gmain = arr1.arr.girlsarr[j].maintenance;
                gint = arr1.arr.girlsarr[j].intelligence;
            }
        }
        switch(ty)
        {
            case "miser": 
            bhap = arr1.arr.boysarr[i].budget-arr1.arr.boysarr[i].total;
            if(gty=="choosy")
            {
                ghap=Math.log((arr1.arr.boysarr[i].totalspent-gmain));

 
            }
            else if (gty=="normal")
            {
                ghap=arr1.arr.boysarr[i].totalspent-gmain;

            }
            else if(gty=="desperate")
            {
                ghap=Math.exp(arr1.arr.boysarr[i].totalspent-gmain);

            }
            hap=bhap+ghap;
            couplesarr[k] = new couple(arr1.arr.boysarr[i].name,gname,bhap,ghap,hap,0);
            k++; 
            
            break;
            case "generous":
            if(gty=="choosy")
            {
                ghap=Math.log((arr1.arr.boysarr[i].totalspent-gmain));

 
            }
            else if (gty=="normal")
            {
                ghap=arr1.arr.boysarr[i].totalspent-gmain;

            }
            else if(gty=="desperate")
            {
                ghap=Math.exp(arr1.arr.boysarr[i].totalspent-gmain);

            }
            bhap = ghap;
            hap=bhap+ghap;
            couplesarr[k] = new couple(arr1.arr.boysarr[i].name,gname,bhap,ghap,hap,0);
            k++; 
            break;
            case "geek":
            bhap = gint;
            if(gty=="choosy")
            {
                ghap=Math.log((arr1.arr.boysarr[i].totalspent-gmain));

 
            }
            else if (gty=="normal")
            {
                ghap=arr1.arr.boysarr[i].totalspent-gmain;

            }
            else if(gty=="desperate")
            {
                ghap=Math.exp(arr1.arr.boysarr[i].totalspent-gmain);

            }
            hap=bhap+ghap;
            couplesarr[k] = new couple(arr1.arr.boysarr[i].name,gname,bhap,ghap,hap,0);
            k++; 
            break;
        }
    }
    couplesarr.sort(function(a, b) {
    return parseFloat(a.hap) - parseFloat(b.hap);
});
}
cno = k;
for(i=0;i<k;i++)
{
    console.log(couplesarr[i].hap);
}
}
happiness();
/**
 * function to calculate the compatibility of couples
 */
function compatibility()
{
    for(i=0;i<cno;i++)
    {
        bname = couplesarr[i].boyname;
        gname = couplesarr[i].girlname;
        for(k=0;k<7;k++)
        {
            if(bname==arr1.arr.boysarr[k].name)
            {
                bint=arr1.arr.boysarr[k].intelligence;
                battr=arr1.arr.boysarr[k].attractiveness;
                bbudget = arr1.arr.boysarr[k].budget;
                break;
            }

        }
        for(j=0;j<4;j++)
        {
            if(gname=arr1.arr.girlsarr[j].name)
            {
                gint = arr1.arr.girlsarr[j].intelligence;
                gattr = arr1.arr.girlsarr[j].attractiveness;
                gmain = arr1.arr.girlsarr[j].maintenance;
                break;
            }

        }
        couplesarr[i].comp = (bbudget-gmain)+Math.abs((bint-gint))+Math.abs((battr-gattr));
        console.log(couplesarr[i].comp);
    }
    couplesarr.sort(function(a, b) {
    return parseFloat(a.comp) - parseFloat(b.comp);
});

}
compatibility();

module.exports = {
couplesarr,arr1} ;