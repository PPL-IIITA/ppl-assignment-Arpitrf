var g_json = require('./girls.json');

/**
 * this is GirlClass.
 */

 /**
 * @param {string} name 
 * @param {integer} attractiveness 
 * @param {integer} intelligence 
 * @param {integer} maintenance 
 * @param {boolean} committed 
 */

class girl {
	constructor(name, attractiveness, intelligence, maintenance, committed) {
		this.name = name;
		this.attractiveness = attractiveness;
		this.intelligence = intelligence;
		this.maintenance = maintenance;
		this.committed = committed;
	}

}

/** @function makeGirlObject
 * @returns {object}
 */

function makeGirlObject() {
var arr_girls = new Array(5);    
 	
	for (var i = 1 ; i < arr_girls.length ; i++) {         
		var temp = 'g'+i;      
		arr_girls[i] = new girl(temp, g_json['g'+i].attractiveness, g_json['g'+i].intelligence, g_json['g'+i].maintenance, g_json['g'+i].committed);
		console.log(arr_girls[i]);     
	}
	return arr_girls;
}

module.exports = makeGirlObject();