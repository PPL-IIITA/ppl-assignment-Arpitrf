var p_json = require('./gifts.json');
/**
 * this is GiftClass.
 */

 /**
 * @param {string} name 
 * @param {string} type
 * @param {integer} price 
 * @param {integer} value  
 */

class gifts {
	constructor(name, type, price, value) {
		this.name = name;
		this.type = type;
		this.price = price;
		this.value = value;
	}
}


/** @function makeGifts
 * @returns {object}
 */

function makeGifts() {
	var arr_gifts = new Array(15);
	for(i = 1 ; i < arr_gifts.length ; i++) {
		var temp = 'p'+i;
		arr_gifts[i] = new gifts(temp, p_json[temp].type, p_json[temp].price, p_json[temp].value);
	}
	return arr_gifts;
}

module.exports = makeGifts();