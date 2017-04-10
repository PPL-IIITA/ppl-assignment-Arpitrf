var arr = require("./pair.js");
/**
 * function to assign the type attribute to the committed boys and girls
 */
function assign()
 {
     var k = 0;
     var l = 0;
     var btype = [
         "miser",
         "generous",
         "geek`"
     ];
     var gtype = [
         "choosy",
         "normal",
         "desperate"
     ];
     for(k=0;k<7;k++)
     {
     var rno = Math.floor(Math.random()*btype.length);
     //var rno1 = Math.floor(Math.random()*gtype.length);
     if(arr.boysarr[k].committed == "true")
     {
         arr.boysarr[k]["type"]=btype[rno];
         
     }
     

 }
 for(l=0;l<4;l++)
 {
     var rno = Math.floor(Math.random()*gtype.length);
     if(arr.girlsarr[l].committed=="true")
     {
         arr.girlsarr[l]["type"]=gtype[rno];
     }
 }


 }
 assign();
 module.exports = arr;