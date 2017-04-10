var bjson = require("./../data/boys.json");
var create = require("./../q3/inheritance.js").create;
/**this is the boy class the constructor of which defines the boy object */
/**@param {string} name- name of the boy
 * @param {integer} inteligence- intelligence of the boy
 * @param {integer} attractiveness- attractiveness of the boy
 * @param {integer} budget- budget of the boy
 * @param {string} committed- status of the boy
 * @param {string} girlname- name of the girl the boy is dating
 * @param {integer} minval- minimum attractiveness of the girl
 *  */
class boy extends create{
    constructor (intelligence,attractiveness,committed,name,budget,girlname,minval)
{
    super(intelligence,attractiveness,committed);
    this.name = name;
    this.budget = budget;
    this.girlname = girlname;
    this.minval = minval;
}
}
/**function which creates an array of objects belonging to the boy class
 */
function createboy()
 {
     boysarr = new Array(10);
    
     for(i=0;i<7;i++)
     {
         //var m = "b"+i;
         //console.log(m);
         //boysarr[i] = new boy("b"+i,bjson["b"+i].intelligence,bjson["b"+i].attractiveness,bjson["b"+i].budget,bjson["b"+i].committed,bjson["b"+i].girlname,bjson["b"+i].minval);
         boysarr[i]=new boy(bjson["b"+i].intelligence,bjson["b"+i].attractiveness,bjson["b"+i].committed,"b"+i,bjson["b"+i].bodget,bjson["b"+i].girlname,bjson["b"+i].minval);
           // boysarr[i].makeboy("b"+i,bjson["b"+i].bodget,bjson["b"+i].girlname,bjson["b"+i].minval);
           // boysarr[i].make(bjson["b"+i].intelligence,bjson["b"+i].attractiveness,bjson["b"+i].committed);

     }
 }
 /**call to the createboy function */
createboy();
/**exporting the array created in the boycreate module */
 module.exports = boysarr;