var arr_boys = require('./make_boys.js');
var arr_girls = require('./make_girls.js');
var arr_gifts = require('./make_gifts.js');
var p_json = require('./gifts.json');
var g_json = require('./girls.json');
var fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

/**
 * this is coupleClass.
 */

 /**
 * @param {string} girl 
 * @param {string} boy 
 * @param {flaot} happiness_g 
 * @param {float} happiness_b
 * @param {float} happiness_c
 * @params {float} compatability
 */
class couple {
	constructor(boy, girl, happiness_g, happiness_b, happiness_c, compatability) {
		this.girl = girl;
		this.boy = boy;
		this.happiness_g = happiness_g;
		this.happiness_b = happiness_b;
		this.happiness_c = happiness_c;
		this.compatability = compatability;
	}
}

/**
* @function utility_q2
*/

module.exports = { utility_q2 :function() {
try{ 
	rl.question("Allotment type-\n1) q1 Allotment method\n2) q4 Allotment method ", function(answer) {
  		if(answer == 1) {
  			func1();
  		}
  		else if(answer == 2) {
  			func2();
  		}
  	});
}
catch(err) {
  console.log(err);
}
}
}
  	
  	function func1() {
  		var arr_couple = new Array(8);
  		for (var i = 1 ; i < arr_boys.length ; i++) {        
			var j = 1;     
			while(j < 5) { 
				if(arr_boys[i].budget >= arr_girls[j].maintenance && arr_girls[j].attractiveness >= arr_boys[i].minAtt && arr_boys[i].committed == false && arr_girls[j].committed == false) {
					console.log(i + "dating" + j);  
        			arr_boys[i].committed = true;
        			arr_boys[i].girlname = arr_girls[j].name;
        			arr_girls[j].boyname = arr_boys[i].name;
					arr_girls[j].committed = true;
		    		break;  
	    		} 
	    		j++;
  			}
  		}
  		for(var i = 1 ; i < 8 ; i++) {
			console.log(arr_boys[i]);
		}
		for(var i = 1 ; i < 5 ; i++) {
			console.log(arr_girls[i]);
		}
  		arr_gifts.sort(function(a,b) {
  			return parseFloat(a.price) - parseFloat(b.price);
  		});
 		var k = {value: 1};
  		var couple_no = 0;
  		for(i = 1 ; i < arr_boys.length ; i++) {
  		if(arr_boys[i].committed == true) {
  			var gift_no = {value : 0};
      		arr_boys[i].allocate(arr_boys, arr_gifts, i, k, gift_no);
  			var happiness_b = arr_boys[i].calc_happiness(arr_boys, arr_girls, i);
      		arr_boys[i]['happiness'] = happiness_b;
      		for(j = 1 ; j < arr_girls.length ; j++) {
        		if(arr_boys[i].girlname == arr_girls[j].name) 
          			break;
      		}
  			var happiness_g = arr_girls[j].calc_happiness(arr_boys[i], arr_girls[j]);
      		arr_girls[j]['happiness'] = happiness_g;
  			var happiness_c = happiness_b + happiness_g;
  			var comp = fun2(arr_boys[i],arr_girls);
  			arr_couple[couple_no++] = new couple(arr_boys[i], arr_girls[j], happiness_c, comp);
  			fileWrite(arr_boys[i],gift_no.value);
  		}
  	}
  	}

  	function func2() {
		for(var i = 1 ; i < arr_boys.length ; i++) {
			for(var j = 1 ; j < arr_boys.length - i - 1 ; j++) {
				if(arr_boys[j].attractiveness < arr_boys[j+1].attractiveness) {
					var temp = arr_boys[j];
					arr_boys[j] = arr_boys[j+1];
					arr_boys[j+1] = temp;
				}
			}
		}
		for(var i = 1 ; i < arr_girls.length ; i++) {
			for(var j = 1 ; j < arr_girls.length - i - 1 ; j++) {
				if(arr_girls[j].maintenance < arr_girls[j+1].maintenance) {
					var temp = arr_girls[j];
					arr_girls[j] = arr_girls[j+1];
					arr_girls[j+1] = temp;
				}
			}
		}

  		/*arr_boys.sort(function(a,b) {
  			return parseFloat(b.attractiveness) - parseFloat(a.attractiveness);
  		}); 
  		arr_girls.sort(function(a,b) {
  			return parseFloat(b.maintenance) - parseFloat(a.maintenance);
  		});*/
  		var arr_couple = new Array(8);
  		var counter = 1;
  		var girl_counter = 1;
  		var boy_counter = 1;
  		var max = 0;
  		var v;
  			for(var i = 1 ; i < 8 ; i++) {
			console.log(arr_boys[i]);
		}
		for(var i = 1 ; i < 5 ; i++) {
			console.log(arr_girls[i]);
		}
  		while(boy_counter < arr_boys.length || girl_counter < arr_girls.length) {
  			if(boy_counter < arr_boys.length) {
  				var j = 1;     
				while(j < arr_girls.length) {
					if(arr_boys[boy_counter].budget >= arr_girls[j].maintenance && arr_girls[j].attractiveness >= arr_boys[boy_counter].minAtt && arr_boys[boy_counter].committed == false && arr_girls[j].committed == false) {
						if(arr_girls[j].attractiveness > max) {
							max = arr_girls[j].attractiveness;
					 		v = j;
						}
					}
					j++
				}
        		arr_boys[boy_counter].committed = true;
        		arr_boys[boy_counter].girlname = arr_girls[v].name;
        		arr_girls[v].boyname = arr_boys[boy_counter].name;
				arr_girls[v].committed = true;
				boy_counter++;  
	    	}
	    	if(girl_counter < arr_girls.length) {
	    		var j = 1;     
				while(j < arr_boys.length) { 
					if(arr_boys[j].budget >= arr_girls[girl_counter].maintenance && arr_girls[girl_counter].attractiveness >= arr_boys[j].minAtt && arr_boys[j].committed == false && arr_girls[girl_counter].committed == false) {
        				arr_boys[j].committed = true;
        				arr_boys[j].girlname = arr_girls[girl_counter].name;
        				arr_girls[girl_counter].boyname = arr_boys[j].name;
						arr_girls[girl_counter].committed = true; 				
					}
					j++
				}
				girl_counter++;
			}
	    }
	    arr_gifts.sort(function(a,b) {
  			return parseFloat(a.price) - parseFloat(b.price);
  		});
 		var k = {value: 1};
  		var couple_no = 0;
  		for(i = 1 ; i < arr_boys.length ; i++) {
  		if(arr_boys[i].committed == true) {
  			var gift_no = {value : 0};
      		arr_boys[i].allocate(arr_boys, arr_gifts, i, k, gift_no);
  			var happiness_b = arr_boys[i].calc_happiness(arr_boys, arr_girls, i);
      		arr_boys[i]['happiness'] = happiness_b;
      		for(j = 1 ; j < arr_girls.length ; j++) {
        		if(arr_boys[i].girlname == arr_girls[j].name) 
          			break;
      		}
  			var happiness_g = arr_girls[j].calc_happiness(arr_boys[i], arr_girls[j]);
      		arr_girls[j]['happiness'] = happiness_g;
  			var happiness_c = happiness_b + happiness_g;
  			var comp = fun2(arr_boys[i],arr_girls);
  			arr_couple[couple_no++] = new couple(arr_boys[i], arr_girls[j], happiness_c, comp);
  			fileWrite(arr_boys[i],gift_no.value);
  			/*arr_couple.sort(function(a,b) {
  				return parseFloat(b.happiness_c) - parseFloat(a.happiness_c);
  			});*/
  			console.log(arr_couple); 
  		}
  	}

  	}
  	



	/*arr_couple.sort(function(a,b) {
  		return parseFloat(b.happiness_c) - parseFloat(a.happiness_c);
  		});*/  	

function fileWrite(arr_boys, gift_no) {
	var t= arr_boys.name + ' is dating ' + arr_boys.girlname +"\n"+"GIFTS:\n";
	fs.appendFile("./list.txt",t);
	for(i = 0 ; i < gift_no ; i++) {
		var temp = arr_boys.gifts[i];
		var type = p_json[temp].type;
		var price = p_json[temp].price;
		var x = temp+" "+type+" "+price+"\n";
		fs.appendFile("./list.txt", x, function(err) {
    	if(err) {
        	return console.log(err);
    	}
    });
  }
} 



/**
* function to calculate compatability
*/

function fun2(arr_boys, arr_girls) {
	var comp;
	for(i = 1 ; i < arr_girls.length ; i++) {
		if(arr_boys.girlname == arr_girls[i].name) 
			break;
	}
	var t1 = arr_boys.budget - arr_girls[i].maintenance;
	var t2 = Math.abs(arr_boys.attractiveness - arr_girls[i].attractiveness);
	var t3 = Math.abs(arr_boys.intelligence - arr_girls[i].intelligence);
	comp = t1 + t2 + t3;
	return comp;
}


