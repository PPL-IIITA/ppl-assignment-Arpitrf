var bjson = require("./data/boys.json");
var gjson = require("./data/girls.json");
var pjson = require("./data/gifts.json");
var fs = require("fs");

var arr = require("./assign.js");
/**gift class the constructor of which defines attributes of the gift object */
/**@param {string} name- name of the gift
 * @param {string} type- type of the gift
 * @param {integer} price
 * @param {integer} value
 * @param {string} fro
 * @param {string} to 
 *  */
class gift{
    constructor(name,type,price,value,fro,to)
    {
        this.name = name;
        this.type = type;
        this.price = price;
        this.value = value;
        this.fro = fro;
        this.to = to;
    }
}
/**
 * function to create an array of objects of the gift class
 */
function gifting()
 {
     giftsarr = new Array(50);
      for(i=0;i<16;i++)
     {
         giftsarr[i] = new gift("p"+i,pjson["p"+i].type,pjson["p"+i].price,pjson["p"+i].value,pjson["p"+i].fro,pjson["p"+i].to);

     }
     giftsarr.sort(function(a, b) {
    return parseFloat(a.price) - parseFloat(b.price);
});

   
     //var len = Object.keys(pjson).length;
     for(i=0;i<7;i++)
     {
         
         if(arr.boysarr[i].committed=="true")
         {
             var ty = arr.boysarr[i].type;
             switch(ty)
             {
                 case "miser":
                 //default :
                 var k = 0;
                 var gname = arr.boysarr[i].girlname;
                 total = 0;
                 while(total<=gjson[gname].maintenance&&k<=15)
                 {
                     if(giftsarr[k].fro==" ")
                     {
                         total = total + giftsarr[k].price;
                         console.log(total);
                         if(total<gjson[gname].maintenance)
                         {
                             giftsarr[k].fro=arr.boysarr[i].name;
                             giftsarr[k].to=gname;
                             var print = arr.boysarr[i].name+"gave"+giftsarr[k].name+"to"+gname;
                             fs.appendFile("./gifts.txt",print+"\n",function(err){
                                 if(err){
                                     return err;
                                 }
                             });
                             k++;
                         }
                         else 
                         break;
                         //else
                         //total = total - giftsarr[k].price;
                     }
                     else
                     k++;
                 }
                 arr.boysarr[i]["totalspent"]=total;
                 break;
                 case  "geek":
                 var k = 0;
                 var gname = arr.boysarr[i].girlname;
                 total = 0;
                 while(total<=gjson[gname].maintenance&&k<=15)
                 {
                     if(giftsarr[k].fro==" ")
                     {
                         total = total + giftsarr[k].price;
                         if(total<gjson[gname].maintenance)
                         {
                             giftsarr[k].fro=arr.boysarr[i].name;
                             giftsarr[k].to=gname;
                             var print = arr.boysarr[i].name+"gave"+giftsarr[k].name+"to"+gname;
                             fs.appendFile("./gifts.txt",print+"\n",function(err){
                                 if(err){
                                     return err;
                                 }
                             });
                             k++;
                         }
                         else
                         break;
                         //else
                         //total = total-giftsarr[k].price;
                     }
                     else
                     k++;
                 }
                 if(total<arr.boysarr[i].budget)
                 {
                     for(m=0;m<16;m++)
                     {
                         if(giftsarr[m].fro==" ")
                         {
                         if(giftsarr[m].type="luxury")
                         {
                             if(giftsarr[m].price<(arr.boysarr[i].budget-total))
                             {
                                 giftsarr[m].fro=boysrr[i].name;
                                 giftsarr[m].to=gname;
                                 var print = arr.boysarr[i].name+"gave"+giftsarr[m].name+"to"+gname;
                             fs.appendFile("./gifts.txt",print+"\n",function(err){
                                 if(err){
                                     return err;
                                 }
                             });
                                 break;

                             }

                         }
                         } 
                    }

                 }
                 arr.boysarr[i]["totalspent"]=total;
                 break;
                 case "generous":
                 var k = 0;
                 var gname = arr.boysarr[i].girlname;
                 total = 0;
                 while(total<arr.boysarr[i].budget)
                 {
                     if(giftsarr[k].fro==" ")
                     {
                         total = total + giftsarr[k].price;
                         if(total<arr.boysarr[i].budget)
                         {
                             giftsarr[k].fro=arr.boysarr[i].name;
                             giftsarr[k].to=gname;
                             var print = arr.boysarr[i].name+"gave"+giftsarr[k].name+"to"+gname;
                             fs.appendFile("./gifts.txt",print+"\n",function(err){
                                 if(err){
                                     return err;
                                 }
                             });
                             k++;
                         }
                         else
                         break;
                     }
                     else
                     k++;
                 }
                 arr.boysarr[i]["totalspent"]=total;
                 break;
             }
             
             console.log(arr.boysarr[i].name);
             console.log(arr.boysarr[i].totalspent);
             
         }
         


     }
     

 }
 gifting();
 module.exports = { arr,
     giftsarr

 };