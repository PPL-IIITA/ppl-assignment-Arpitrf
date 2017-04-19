var b_json = require('./boys.json');
var g_json = require('./girls.json');
/**
 * this is BoyClass. (base class)
 */

 /**
 * @param {string} name 
 * @param {integer} attractiveness 
 * @param {integer} intelligence 
 * @param {integer} budget 
 * @param {integer} minAtt
 * @params {boolean} committed
 * @param {string} girlname 
 */
class boy {
	constructor(name, attractiveness, intelligence, budget, minAtt, committed, girlname) {
		this.name = name;
		this.attractiveness = attractiveness;
		this.intelligence = intelligence;
		this.budget = budget;
		this.minAtt = minAtt;
		this.committed = committed;
		this.girlname = girlname;
		this.gifts = new Array(5);
	}

	allocate(arr_boys, arr_gifts, i){}
	calc_happiness(arr_boys, arr_girls, i){}
}



/**
 * this is miser Class. (derived class)
 */

 /**
 * @param {string} name 
 * @param {integer} attractiveness 
 * @param {integer} intelligence 
 * @param {integer} budget 
 * @param {integer} minAtt
 * @params {boolean} committed
 * @param {string} girlname 
 */

 class miser extends boy {
 	constructor(name, attractiveness, intelligence, budget, minAtt, committed, girlname){
 		super(name, attractiveness, intelligence, budget, minAtt, committed, girlname);
 	}
 	allocate (arr_boys, arr_gifts, i, k, gift_no) {
 			var sum_price = 0;
  			var temp = arr_boys[i].girlname;
  			var total = g_json[temp].maintenance;
  			while(sum_price < total) {
  				sum_price = sum_price + arr_gifts[k.value].price;
  				arr_boys[i].gifts[gift_no.value++] = arr_gifts[k.value].name;
  				k.value++; 
  				}
  			arr_boys[i]['expenditure'] = sum_price;
 	}
 	calc_happiness(arr_boys, arr_girls, i){
 		var happiness_b = arr_boys[i].budget - arr_boys[i]['expenditure'];
 		return happiness_b;
 	}
 }


/**
 * this is generous Class. (derived class)
 */

 /**
 * @param {string} name 
 * @param {integer} attractiveness 
 * @param {integer} intelligence 
 * @param {integer} budget 
 * @param {integer} minAtt
 * @params {boolean} committed
 * @param {string} girlname 
 */

 class generous extends boy{
 	constructor(name, attractiveness, intelligence, budget, minAtt, committed, girlname){
 		super(name, attractiveness, intelligence, budget, minAtt, committed, girlname);
 	}

 	allocate(arr_boys, arr_gifts, i, k, gift_no) {
 		var sum_price = 0;
  		var budget = arr_boys[i].budget;
  		while(sum_price < budget) {
  			sum_price = sum_price + arr_gifts[k.value].price;
	  		arr_boys[i].gifts[gift_no.value++] = arr_gifts[k.value].name;
			if(sum_price > budget) {
				sum_price = sum_price - arr_gifts[k.value++].price;
				break;
			}	
			k.value++;
  		}
  		arr_boys[i]['expenditure'] = sum_price;
 	}
	calc_happiness(arr_boys, arr_girls, i) {
		for(var j = 1 ; j < arr_girls.length ; j++) {
			if(arr_boys[i].girlname == arr_girls[j].name) 
				break;
		}
 		var happiness_b = arr_girls[j].calc_happiness(arr_boys[i], arr_girls[j]);
 		return happiness_b;
 	} 
 }


/**
 * this is geeky Class. (derived class)
 */

 /**
 * @param {string} name 
 * @param {integer} attractiveness 
 * @param {integer} intelligence 
 * @param {integer} budget 
 * @param {integer} minAtt
 * @params {boolean} committed
 * @param {string} girlname 
 */

 class geeky extends boy {
	constructor(name, attractiveness, intelligence, budget, minAtt, committed, girlname){
 		super(name, attractiveness, intelligence, budget, minAtt, committed, girlname);
 	}


 	allocate(arr_boys, arr_gifts, i, k, gift_no) {
 		var sum_price = 0;
  		var temp = arr_boys[i].girlname;
  		var total = g_json[temp].maintenance;
  		while(sum_price < total) {
  			sum_price = sum_price + arr_gifts[k.value].price;
  			arr_boys[i].gifts[gift_no.value++] = arr_gifts[k.value].name;
  			k.value++;
  		}
  		arr_boys[i]['expenditure'] = sum_price;
 	}
 	calc_happiness(arr_boys, arr_girls, i){
		var happiness_b = g_json[arr_boys[i].girlname].intelligence;
 		return happiness_b;
 	}
 }

/** @function makeBoyObject
 * @returns {object}
 */
 
function makeBoyObject () {
	var arr_boys = new Array(8);
	for (var i = 1 ; i < 8; i++) {      
 	 	var temp ='b'+i;  
 	 	if(i % 3 == 0) 
      		arr_boys[i] = new miser(temp, b_json['b'+i].attractiveness, b_json['b'+i].intelligence, b_json['b'+i].budget, b_json['b'+i].minAtt, b_json['b'+i].committed, b_json['b'+i].girlname);
		else if(i % 3 == 1) 
			arr_boys[i] = new generous(temp, b_json['b'+i].attractiveness, b_json['b'+i].intelligence, b_json['b'+i].budget, b_json['b'+i].minAtt, b_json['b'+i].committed, b_json['b'+i].girlname);
		else 
			arr_boys[i] = new geeky(temp, b_json['b'+i].attractiveness, b_json['b'+i].intelligence, b_json['b'+i].budget, b_json['b'+i].minAtt, b_json['b'+i].committed, b_json['b'+i].girlname);

	}  
	for(var i = 1 ; i < 8 ; i++) {
		console.log(arr_boys[i]);
	}
	return arr_boys;
}
module.exports = makeBoyObject();
