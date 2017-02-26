var fs = require('fs');
var arr_boys = require('./boy_class.js');
var arr_girls = require('./girl_class.js');

/**
* @function utility
*/

module.exports = { utility : function() {
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
}
/**
* function to log to a file
*/
function fileWrite(arr_boys) {
	var t = arr_boys.name + " is dating " + arr_boys.girlname +"\n";
	fs.appendFile("./list.txt", t, function(err) {
    	if(err) {
        	return console.log(err);
    	}
    	console.log("The file was saved!");
	});
} 

