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
	constructor(boy, girl, happiness_c, compatability) {
		this.girl = girl;
		this.boy = boy;
		this.happiness_c = happiness_c;
		this.compatability = compatability;
	}
}

/**
* @function utility_q2
*/

module.exports = { utility_q2 :function() { 
try{
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
  	for(var i = 1 ; i < 8 ; i++) {
		console.log(arr_boys[i]);
	}
	arr_couple.sort(function(a,b) {
  		return parseFloat(a.happiness_c) - parseFloat(b.happiness_c);
  	});

	for(var i = 0 ; i < couple_no ; i++) {
		console.log(arr_couple[i].happiness_c);
	}
	
	rl.question("Input the k number of couples you want to breakup ", function(answer) {
		for(var i  = 0 ; i < answer ; i++) {
			fileWrite_breakup(arr_couple[i]);
			var boy = arr_couple[i].boy.name;
			var girl = arr_couple[i].girl.name;
			for(j = 1 ; j < arr_boys.length ; j++) {
        		if(arr_boys[j].name == boy) 
          			break;
      		}
      		arr_boys[j].committed = false;
      		for(var j = 1 ; j < arr_girls.length ; j++) {
        		if(arr_girls[j].name == girl) 
          			break;
      		}
      		arr_girls[j].committed = false;

			assign_new_couple(arr_couple[i].boy, arr_girls);
			arr_couple[i] = null;
			delete arr_couple[i];
		}
		for(var i = 0 ; i < couple_no ; i++) {
			console.log(arr_couple[i]);
		}
  		rl.close();
	});
}
catch(err) {
	console.log(err);
}
}
} 	


function assign_new_couple(arr_boys, arr_girls) {
	var j = 1;
	var g = arr_boys.girlname;     
		while(j < 5) { 
			if(arr_boys.budget >= arr_girls[j].maintenance && arr_girls[j].attractiveness >= arr_boys.minAtt && arr_boys.committed == false && arr_girls[j].committed == false && arr_girls[j].name != g) {
				console.log(i + "dating" + j);  
        		arr_boys.committed = true;
        		arr_boys.girlname = arr_girls[j].name;
        		arr_girls[j].boyname = arr_boys.name;
				arr_girls[j].committed = true;
				fileWrite_new_couples(arr_boys, arr_girls[j]);
		    	break;  
	    	} 
	    	j++;
  		}	
}

function fileWrite_new_couples(arr_boys, arr_girls) {
	var x = "\n\nNEW COUPLES:\n\n"
	fs.appendFile("./list.txt",x);
	var t = arr_boys.name + " is dating " + arr_girls.name + "\n";
	fs.appendFile("./list.txt",t);	
}

function fileWrite_breakup(arr_couple) {
	var x = "\n\nBREAKUPS:\n\n"
	fs.appendFile("./list.txt",x);
	var t = arr_couple.boy.name + " " + arr_couple.girl.name + " broke up :(\n";
	fs.appendFile("./list.txt",t);	
}

function fileWrite(arr_boys, gift_no) {
	var x = "\n\nCOUPLES:\n\n"
	fs.appendFile("./list.txt",x);
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


