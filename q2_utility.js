var arr_boys = require('./boy_class_q2.js');
var arr_girls = require('./girl_class.js');
var arr_gifts = require('./gift_class.js');
var p_json = require('./gifts.json');
var g_json = require('./girls.json');
var fs = require('fs');


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
	constructor(girl, boy, happiness_g, happiness_b, happiness_c, compatability) {
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
  	var b_type = ['miser', 'generous', 'geeky'];
  	var g_type = ['choosy','normal','desperate'];
  	for(var i = 1 ; i < arr_boys.length ; i++) {
  		arr_boys[i]['type'] = b_type[i%3];
  	}
  	for(var i = 1 ; i < arr_girls.length ; i++) {
  		arr_girls[i]['type'] = g_type[i%3];
  	}
  	arr_gifts.sort(function(a,b) {
  		return parseFloat(a.price) - parseFloat(b.price);
  	});
 
  	var k=1;
  	var couple_no = 0;
   	for(i = 1 ; i < arr_boys.length ; i++) {
  		var gift_no = 0;
  		if(arr_boys[i].committed == true) {
  			switch(arr_boys[i].type) {
  				case 'miser' :
  					var sum_price = 0;
  					var temp = arr_boys[i].girlname;
  					var total = g_json[temp].maintenance;
  					while(sum_price < total) {
  						sum_price = sum_price + arr_gifts[k].price;
  						arr_boys[i].gifts[gift_no++] = arr_gifts[k].name;
  						k++;
  					}
  					arr_boys[i]['expenditure'] = sum_price;
  					var happiness_b = arr_boys[i].budget - sum_price;
  					var happiness_g = fun1(arr_boys[i],arr_girls);
  					var happiness_c = happiness_b + happiness_g;
  					var comp = fun2(arr_boys[i],arr_girls);
  					arr_couple[couple_no++] = new couple(arr_boys[i].girlname, arr_boys[i].name, happiness_g, happiness_b, happiness_c, comp)
  					fileWrite(arr_boys[i],gift_no);
  					break;

  				case 'generous' :
  					var sum_price = 0;
  					var budget = arr_boys[i].budget;
  					while(sum_price < budget) {
  						sum_price = sum_price + arr_gifts[k].price;
	  					arr_boys[i].gifts[gift_no++] = arr_gifts[k].name;
						if(sum_price > budget) {
							sum_price = sum_price - arr_gifts[k++].price;
							break;
						}	
						k++;
  					}
  					arr_boys[i]['expenditure'] = sum_price;
  					var happiness_g = fun1(arr_boys[i], arr_girls);
  					var happiness_b = happiness_g;
  					var happiness_c = happiness_g + happiness_b;
    				var comp = fun2(arr_boys[i],arr_girls);
					arr_couple[couple_no++] = new couple(arr_boys[i].girlname, arr_boys[i].name, happiness_g, happiness_b, happiness_c, comp)
  					fileWrite(arr_boys[i], gift_no);
  					break;

  				case 'geeky' :
  					var sum_price = 0;
  					var temp = arr_boys[i].girlname;
  					var total = g_json[temp].maintenance;
  					while(sum_price < total) {
  						sum_price = sum_price + arr_gifts[k].price;
  						arr_boys[i].gifts[gift_no++] = arr_gifts[k].name;
  						k++;
  					}
  					arr_boys[i]['expenditure'] = sum_price;
  					var happiness_g = fun1(arr_boys[i], arr_girls);
  					var happiness_b = g_json[arr_boys[i].girlname].intelligence;
  					var happiness_c = happiness_b + happiness_g;
  					var comp = fun2(arr_boys[i],arr_girls);
   					arr_couple[couple_no++] = new couple(arr_boys[i].girlname, arr_boys[i].name, happiness_g, happiness_b, happiness_c, comp)
					fileWrite(arr_boys[i], gift_no);
  					break;
  			}
  		}
  	}

	arr_couple.sort(function(a,b) {
  		return parseFloat(b.happiness_c) - parseFloat(a.happiness_c);
  		});  	
	for(i = 0 ; i < arr_gifts.length; i++) {
		console.log(arr_gifts[i]);
	}
	for(i = 1 ; i < arr_boys.length ; i++) {
  		console.log(arr_boys[i]);
  	}
	for(i = 1 ; i < arr_girls.length ; i++) {
		console.log(arr_girls[i]);
	}
	for(i = 0 ; i < couple_no ; i++) {
  		console.log(arr_couple[i]);
 	}

}
}


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
* function to calculate happiness of girl
*/

function fun1(arr_boys, arr_girls) { 
	var h;
	for(i = 1 ; i < arr_girls.length ; i++) {
		if(arr_boys.girlname == arr_girls[i].name) 
			break;
	}
	if(arr_girls[i].type == "choosy") {
		h = Math.log(arr_boys.expenditure-arr_girls[i].maintenance);
		return h;
	}
	if(arr_girls[i].type == "normal") {
		h = arr_boys.expenditure - arr_girls[i].maintenance;
		return h;
	}
	if(arr_girls[i].type == "desperate") {
		h = Math.exp(arr_boys.expenditure-arr_girls[i].maintenance);
		return h;
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



