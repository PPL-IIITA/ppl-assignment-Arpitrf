var gjson = require("./data/girls.json");
/**this is the girl class the constructor of which defines the girl object */
/**@param {string} name- name of the girl
 * @param {integer} inteligence- intelligence of the girl
 * @param {integer} attractiveness- attractiveness of the girl
 * @param {integer} maintenance- maintenance of the girl
 * @param {string} committed- status of the boy
 * @param {string} girlname- name of the girl the boy is dating
 *  */
class girl{
    constructor (name,intelligence,attractiveness,maintenance,committed,boyname)
{
    this.name = name;
    this.attractiveness = attractiveness;
    this.maintenance = maintenance;
    this.intelligence = intelligence;
    this.committed = committed;
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
         girlsarr[i] = new girl("g"+i,gjson["g"+i].intelligence,gjson["g"+i].attractiveness,gjson["g"+i].maintenance,gjson["g"+i].committed,gjson["g"+i].boyname);

     }
}
 
creategirl();
/**exporting the array created in the boycreate module */
module.exports = girlsarr;