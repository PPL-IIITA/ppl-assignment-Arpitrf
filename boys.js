var b_json = require('./boys.json');
var g_json = require('./girls.json');
var fs = require('fs');

class boy {
	constructor(name, attractiveness, intelligence, budget, minAtt, committed, girlname) {
		this.name = name;
		this.attractiveness = attractiveness;
		this.intelligence = intelligence;
		this.budget = budget;
		this.minAtt = minAtt;
		this.committed = committed;
		this.girlname = girlname;
	}
}

class girl {
	constructor(name, attractiveness, intelligence, maintenance, committed) {
		this.name = name;
		this.attractiveness = attractiveness;
		this.intelligence = intelligence;
		this.maintenance = maintenance;
		this.committed = committed;
	}

}

function utility() {   
 	var arr_boys = new Array(8);    
 	var arr_girls = new Array(5);    
 	for (var i = 1 ; i < arr_boys.length; i++) {      
 	 	var temp ='b'+i;  
      	arr_boys[i] = new boy(temp, b_json['b'+i].attractiveness, b_json['b'+i].intelligence, b_json['b'+i].budget, b_json['b'+i].minAtt, b_json['b'+i].committed, b_json['b'+i].girlname);
		console.log(arr_boys[i]);  
	}
	for (var i = 1 ; i < arr_girls.length ; i++) {         
		var temp = 'g'+i;      
		arr_girls[i] = new girl(temp, g_json['g'+i].attractiveness, g_json['g'+i].intelligence, g_json['g'+i].maintenance, g_json['g'+i].committed);
		console.log(arr_girls[i]);     
	}
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
  	for(i = 1 ; i < arr_boys.length ; i++) {
  		console.log(arr_boys[i]);
  		if(arr_boys[i].committed == true) {
  			fileWrite(arr_boys[i]);
  		}
  	}

}

function fileWrite(arr_boys) {
	var t = arr_boys.name + " is dating " + arr_boys.girlname +"\n";
	fs.appendFile("./list.txt", t, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 

}
utility();
/*var m = "b"+1;
console.log(b_json['b'+1].attractiveness);*/
