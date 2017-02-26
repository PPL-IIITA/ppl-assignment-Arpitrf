var b_json = require('./boys.json');
/**
 * this is BoyClass.
 */

 /**
 * @param {string} name 
 * @param {integer} attractiveness 
 * @param {integer} intelligence 
 * @param {integer} budget 
 * @param {integer} minAtt
 * @params {boolean} committed
 * @param {string} girlname 
 * @param {Array} gifts
 */

class boy {
	constructor(name, attractiveness, intelligence, budget, minAtt, committed, girlname, gifts) {
		this.name = name;
		this.attractiveness = attractiveness;
		this.intelligence = intelligence;
		this.budget = budget;
		this.minAtt = minAtt;
		this.committed = committed;
		this.girlname = girlname;
		this.gifts = gifts;
	}
}

/** @function makeBoyObject_q2
 * @returns {object}
 */

function makeBoyObject() {
	var arr_boys = new Array(8);
	for (var i = 1 ; i < arr_boys.length; i++) {      
 	 	var temp ='b'+i;  
      	arr_boys[i] = new boy(temp, b_json['b'+i].attractiveness, b_json['b'+i].intelligence, b_json['b'+i].budget, b_json['b'+i].minAtt, b_json['b'+i].committed, b_json['b'+i].girlname, b_json['b'+i].gifts);  
	}
	return arr_boys;
}

module.exports = makeBoyObject();