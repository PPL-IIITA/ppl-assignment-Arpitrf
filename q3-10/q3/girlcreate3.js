var gjson = require("./../data/girls.json");
var create = require("./../q3/inheritance.js").create;
/**this is the girl class the constructor of which defines the girl object */
/**@param {string} name- name of the girl
 * @param {integer} inteligence- intelligence of the girl
 * @param {integer} attractiveness- attractiveness of the girl
 * @param {integer} maintenance- maintenance of the girl
 * @param {string} committed- status of the boy
 * @param {string} girlname- name of the girl the boy is dating
 *  */
class girl extends create{
    constructor (intelligence,attractiveness,committed,name,maintenance,boyname)
{
    super(intelligence,attractiveness,committed);
    this.name = name;
    this.maintenance = maintenance;
    this.boyname = boyname;
}
/**function which creates an array of objects belonging to the girl class
 */
}
function creategirl()
{
     girlsarr = new Array(10);
    
     for(i=0;i<4;i++)
     {
         //var m = "g"+i;
         //girlsarr[i] = new girl("g"+i,gjson["g"+i].intelligence,gjson["g"+i].attractiveness,gjson["g"+i].maintenance,gjson["g"+i].committed,gjson["g"+i].boyname);
        girlsarr[i]=new girl(gjson["g"+i].intelligence,gjson["g"+i].attractiveness,gjson["g"+i].committed,"g"+i,gjson["g"+i].maintenance,gjson["g"+i].boyname)
            //girlsarr[i].makegirl("g"+i,gjson["g"+i].maintenance,gjson["g"+i].boyname);
            //girlsarr[i].make(gjson["g"+i].intelligence,gjson["g"+i].attractiveness,gjson["g"+i].committed);
        
     }
}
 
creategirl();
/**exporting the array created in the boycreate module */
module.exports = girlsarr;