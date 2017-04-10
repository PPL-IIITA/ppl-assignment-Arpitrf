/**
 * this is the create class which defines common attributes of boys and girls
 */
/**@param {integer} intelligence intelligence of the respective boy or girl
 * @param {integer} attractiveness attractiveness of the respective boy or girl
 * @param {integer} committed status of the respective boy or girl
 *  */
class create{
     constructor (intelligence,attractiveness,committed)
{
    this.intelligence = intelligence;
    this.attractiveness = attractiveness;
    this.committed = committed;
}
}
module.exports={create};