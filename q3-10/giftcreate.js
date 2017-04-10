/**this is the Giftcreate class the constructor of which defines the gift object */
/**@param {string} name- name of the gift
 * @param {string} type- type of the gift
 * @param {integer} price- price of the gift
 * @param {integer} value- value of the gift
 * @param {string} fro- name of the person giving the gift
 * @param {string} to- name of the peerson receiving the gift
 *  */
class Giftcreate{
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
module.exports = {Giftcreate}