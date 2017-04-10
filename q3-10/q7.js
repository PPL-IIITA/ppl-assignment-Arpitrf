var arr = require('./pair.js')
var arr1 = require('./data/q7input.json')
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout)
var fs = require('fs');
var imp;
rl.question('choose the type of implementation you want', function (answer) {
    imp = answer;
    //console.log(imp);
    execute();

})
/**function to find girlfriends of a given set of boys with three possible implementations  */
function execute() {
    //console.log("hello");
    switch (imp) {
        case "1":
            //console.log("hello")
            for (i = 0; i < 4; i++) {
                for (j = 0; j < 7; j++) {
                    //console.log("hello")
                    if (arr1["i" + i].name == arr.boysarr[j].name) {
                        console.log(arr.boysarr[j].girlname)
                        break;
                    }
                }
            }
            break;

        case "2":
            arr.boysarr.sort(function (a, b) {
                return parseFloat(a.name) - parseFloat(b.name);
            });
            //var arr2 = arr.boysarr;
            function binarysearch(arr2, i) {
                var mid = Math.floor(arr2.length / 2);
                var name = Object.keys(arr2)[0];
                if (name === i) {
                    //console.log('match', arr.boysarr[mid], i);
                    return arr2["b"+mid].girlname;
                } else if (name < i && arr2.length > 1) {
                    //console.log('mid lower', arr.boysarr[mid], i);
                    return binarysearch(arr2.splice(mid, Number.MAX_VALUE), i);
                } else if (name > i && arr2.length > 1) {
                    //console.log('mid higher', arr.boysarr[mid], i);
                    return binarysearch(arr2.splice(0, mid), i);
                } else {
                    //console.log('not here', i);
                    return -1;
                }
            }
            for(i=0;i<4;i++)
            {
                var girlfriend = binarysearch(arr.boysarr,arr1["i"+i].name)
                console.log(girlfriend);
            }
            break;

        case "3": {
            var jsonobj = '{ \n'
            for (i = 0; i < 7; i++) {
                if (i < 6)
                    jsonobj = jsonobj + '"b' + i + '"' + ':' + '{ \n' + '"gname"' + ':' + '"' + arr.boysarr[i].girlname + '"' + ' \n ' + '}, \n'
                if (i == 6)
                    jsonobj = jsonobj + '"b' + i + '"' + ':' + '{ \n' + '"gname"' + ':' + '"' + arr.boysarr[i].girlname + '"' + ' \n ' + '} \n'

            }
            jsonobj = jsonobj + '}'
            fs.writeFile("./q7hash.json", jsonobj, function (err) {
                if (err) {
                    console.log(err);
                }
                else
                    execute1()
            })
            /**function to create a hash table  */
            function execute1() {
                var arr2 = require("./q7hash.json")
                for (i = 0; i < 4; i++) {
                    console.log("b" + i + ":" + arr2["b" + i].gname);
                }
            }



        }
        break;
    }
}
