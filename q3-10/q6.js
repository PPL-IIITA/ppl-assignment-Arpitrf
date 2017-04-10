var arr2 = require("./happy.js");
var fs = require('fs');
var t = 16;
/**function to perform breakup of a given set of couples t number of times  */
function breakup() {


    for (i = 0; i < k; i++) {
        arr2.arr1.arr.boysarr[i].committed = "false";
        arr2.arr1.arr.boysarr[i].girlname = "";
        arr2.arr1.arr.girlsarr[i].committed = "true";
        arr2.couplesarr[i].boyname = "";
        arr2.couplesarr[i].girlname = "";
        arr2.couplesarr[i].boyhap = 0;
        arr2.couplesarr[i].girlhap = 0;
        arr2.couplesarr[i].hap = 0;
        arr2.couplesarr[i].comp = 0;

    }
}
/**function to form new couples after every breakup  */
function newpair() {
    var k = 0;

    for (k = 0; k < 7; k++) {
        var j = 0;
        while (j < 4) {
            if (girlsarr[j].committed == "false") {
                if(girlsarr[k].boyname!="b"+k)
                {
                if (boysarr[k].minval < girlsarr[j].attractiveness) {
                    if (boysarr[k].budget <= girlsarr[j].maintenance) {
                        boysarr[k].committed = "true";
                        boysarr[k].girlname = "g" + j;
                        girlsarr[j].boyname = "b" + k;
                        girlsarr[j].committed = "true";
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
            else
                j++;
        }
    }

    for (i = 0; i < 7; i++) {
        if (boysarr[i].committed == "true") {
            var x = boysarr[i].name + " is dating " + boysarr[i].girlname + "\n";
            //console.log(x);
            fs.appendFile("./log.txt", x, function (err) {
                if (err)
                    return console.log("error detected");
            });
        }

    }
}
for(i=0;i<t;i++)
{
breakup();
newpair();
}