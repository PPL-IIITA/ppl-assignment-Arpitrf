var g_json = require('./girls.json');

/**
 * this is GirlClass. (base class)
 */

 /**
 * @param {string} name 
 * @param {integer} attractiveness 
 * @param {integer} intelligence 
 * @param {integer} maintenance 
 * @param {boolean} committed 
 */

class girl {
	constructor(name, attractiveness, intelligence, maintenance, committed, boyname) {
		this.name = name;
		this.attractiveness = attractiveness;
		this.intelligence = intelligence;
		this.maintenance = maintenance;
		this.committed = committed;
	}
	calc_happiness(arr_boys, arr_girls){}
}

/**
 * this is choosy class. (derived class)
 */

 /**
 * @param {string} name 
 * @param {integer} attractiveness 
 * @param {integer} intelligence 
 * @param {integer} maintenance 
 * @param {boolean} committed 
 */



 class choosy extends girl {
 	constructor(name, attractiveness, intelligence, maintenance, committed, boyname) {
 		super(name, attractiveness, intelligence, maintenance, committed);
 	}
 	calc_happiness(arr_boys, arr_girls){
 		var h = Math.log(arr_boys.expenditure-arr_girls.maintenance);
		return h;

 	}
  }

/**
 * this is normal class. (derived class)
 */

 /**
 * @param {string} name 
 * @param {integer} attractiveness 
 * @param {integer} intelligence 
 * @param {integer} maintenance 
 * @param {boolean} committed 
 */

 class normal extends girl {
 	constructor(name, attractiveness, intelligence, maintenance, committed, boyname) {
 		super(name, attractiveness, intelligence, maintenance, committed);
 	}
 	calc_happiness(arr_boys, arr_girls){
 		var h = arr_boys.expenditure - arr_girls.maintenance;
		return h;

 	}
 }

/**
 * this is desperate class. (derived class)
 */

 /**
 * @param {string} name 
 * @param {integer} attractiveness 
 * @param {integer} intelligence 
 * @param {integer} maintenance 
 * @param {boolean} committed 
 */

 class desperate extends girl {
 	constructor(name, attractiveness, intelligence, maintenance, committed, boyname) {
 		super(name, attractiveness, intelligence, maintenance, committed)
 	}
 	calc_happiness(arr_boys, arr_girls){
 		var h = Math.exp(arr_boys.expenditure-arr_girls.maintenance);
		return h;
 	}
 }

/** @function makeGirlObject
 * @returns {object}
 */

function makeGirlObject() {
var arr_girls = new Array(5);    
 	
	for (var i = 1 ; i < arr_girls.length ; i++) {         
		var temp = 'g'+i;      
		if(i % 3 == 0) 
      		arr_girls[i] = new choosy(temp, g_json['g'+i].attractiveness, g_json['g'+i].intelligence, g_json['g'+i].maintenance, g_json['g'+i].committed, g_json['g'+i].boyname);
		else if(i % 3 == 1) 
			arr_girls[i] = new normal(temp, g_json['g'+i].attractiveness, g_json['g'+i].intelligence, g_json['g'+i].maintenance, g_json['g'+i].committed, g_json['g'+i].boyname);
		else 
			arr_girls[i] = new desperate(temp, g_json['g'+i].attractiveness, g_json['g'+i].intelligence, g_json['g'+i].maintenance, g_json['g'+i].committed, g_json['g'+i].boyname);
	}
	for(var i = 1 ; i < 5 ; i++) {
		console.log(arr_girls[i]);
	}
	return arr_girls;
}

module.exports = makeGirlObject();
