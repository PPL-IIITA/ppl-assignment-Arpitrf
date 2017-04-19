var p_json = require('./gifts.json');
/**
 * this is GiftClass. (base class)
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

/**
 * this is essential Class. (derived class)
 */

 /**
 * @param {string} name 
 * @param {string} type
 * @param {integer} price 
 * @param {integer} value  
 */

class essential extends gifts {
	constructor(name, type, price, value) {
		super(name, type, price, value);
	}
}

/**
 * this is luxury Class. (derived class)
 */

 /**
 * @param {string} name 
 * @param {string} type
 * @param {integer} price 
 * @param {integer} value  
 */

class luxury extends gifts {
	constructor(name, type, price, value) {
		super(name, type, price, value);
	}
}

/**
 * this is utility Class. (derived class)
 */

 /**
 * @param {string} name 
 * @param {string} type
 * @param {integer} price 
 * @param {integer} value  
 */

class utility extends gifts {
	constructor(name, type, price, value) {
		super(name, type, price, value);
	}
}

/** @function makeGifts
 * @returns {object}
 */

function makeGifts() {
	var arr_gifts = new Array(15);
	for(i = 1 ; i < arr_gifts.length ; i++) {
		var temp = 'p'+i;
		if(i % 3 == 0)
			arr_gifts[i] = new essential(temp, p_json[temp].type, p_json[temp].price, p_json[temp].value);
		else if(i % 3 == 1)
			arr_gifts[i] = new luxury(temp, p_json[temp].type, p_json[temp].price, p_json[temp].value);
		else 
			arr_gifts[i] = new utility(temp, p_json[temp].type, p_json[temp].price, p_json[temp].value);
	}
	for(var i = 1 ; i < 16 ; i++) {
		console.log(arr_gifts[i]);
	}
	return arr_gifts;
}

module.exports = makeGifts();
