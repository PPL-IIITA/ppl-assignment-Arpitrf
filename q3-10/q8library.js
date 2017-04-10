var pjson = require('./data/gifts.json');
var readline = require('readline');
var arr = require("./assign.js");
var bjson = require("./data/boys.json");
var gjson = require("./data/girls.json");
var Giftcreate = require('./giftcreate.js').Giftcreate;
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require("fs");
var system;
rl.question('what type of gifting system do you want ?', function (answer) {
    system = answer;
    gifting();
    module.exports = {
        arr,
        giftsarr
    };

})
/**function to create a gift allocation system with two possible implementations */
function gifting() {
    giftsarr = new Array(50);
    for (i = 0; i < 16; i++) {
        //giftsarr[i] = new gift("p"+i,pjson["p"+i].type,pjson["p"+i].price,pjson["p"+i].value,pjson["p"+i].fro,pjson["p"+i].to);
        giftsarr[i] = new Giftcreate("p" + i, pjson["p" + i].type, pjson["p" + i].price, pjson["p" + i].value, pjson["p" + i].fro, pjson["p" + i].to);
        //giftasrr[i].makegift("p" + i, pjson["p" + i].type, pjson["p" + i].price, pjson["p" + i].value, pjson["p" + i].fro, pjson["p" + i].to);

    }
    giftsarr.sort(function (a, b) {
        return parseFloat(a.price) - parseFloat(b.price);
    });

    switch (system) {
        case "1":
            //console.log('hello');
            for (i = 0; i < 7; i++) {

                if (arr.boysarr[i].committed == "true") {
                    var ty = arr.boysarr[i].type;
                    switch (ty) {
                        case "miser":
                            //default :
                            var k = 0;
                            var gname = arr.boysarr[i].girlname;
                            total = 0;
                            while (total <= gjson[gname].maintenance && k <= 15) {
                                if (giftsarr[k].fro == " ") {
                                    total = total + giftsarr[k].price;
                                    console.log(total);
                                    if (total < gjson[gname].maintenance) {
                                        giftsarr[k].fro = arr.boysarr[i].name;
                                        giftsarr[k].to = gname;
                                        var print = arr.boysarr[i].name + "gave" + giftsarr[k].name + "to" + gname;
                                        fs.appendFile("./gifts.txt", print + "\n", function (err) {
                                            if (err) {
                                                return err;
                                            }
                                        });
                                        k++;
                                    }
                                    else
                                        break;
                                    //else
                                    //total = total - giftsarr[k].price;
                                }
                                else
                                    k++;
                            }
                            arr.boysarr[i]["totalspent"] = total;
                            break;
                        case "geek":
                            var k = 0;
                            var gname = arr.boysarr[i].girlname;
                            total = 0;
                            while (total <= gjson[gname].maintenance && k <= 15) {
                                if (giftsarr[k].fro == " ") {
                                    total = total + giftsarr[k].price;
                                    if (total < gjson[gname].maintenance) {
                                        giftsarr[k].fro = arr.boysarr[i].name;
                                        giftsarr[k].to = gname;
                                        var print = arr.boysarr[i].name + "gave" + giftsarr[k].name + "to" + gname;
                                        fs.appendFile("./gifts.txt", print + "\n", function (err) {
                                            if (err) {
                                                return err;
                                            }
                                        });
                                        k++;
                                    }
                                    else
                                        break;
                                    //else
                                    //total = total-giftsarr[k].price;
                                }
                                else
                                    k++;
                            }
                            if (total < arr.boysarr[i].budget) {
                                for (m = 0; m < 16; m++) {
                                    if (giftsarr[m].fro == " ") {
                                        if (giftsarr[m].type = "luxury") {
                                            if (giftsarr[m].price < (arr.boysarr[i].budget - total)) {
                                                giftsarr[m].fro = boysrr[i].name;
                                                giftsarr[m].to = gname;
                                                var print = arr.boysarr[i].name + "gave" + giftsarr[m].name + "to" + gname;
                                                fs.appendFile("./gifts.txt", print + "\n", function (err) {
                                                    if (err) {
                                                        return err;
                                                    }
                                                });
                                                break;

                                            }

                                        }
                                    }
                                }

                            }
                            arr.boysarr[i]["totalspent"] = total;
                            break;
                        case "generous":
                            var k = 0;
                            var gname = arr.boysarr[i].girlname;
                            total = 0;
                            while (total < arr.boysarr[i].budget) {
                                if (giftsarr[k].fro == " ") {
                                    total = total + giftsarr[k].price;
                                    if (total < arr.boysarr[i].budget) {
                                        giftsarr[k].fro = arr.boysarr[i].name;
                                        giftsarr[k].to = gname;
                                        var print = arr.boysarr[i].name + "gave" + giftsarr[k].name + "to" + gname;
                                        fs.appendFile("./gifts.txt", print + "\n", function (err) {
                                            if (err) {
                                                return err;
                                            }
                                        });
                                        k++;
                                    }
                                    else
                                        break;
                                }
                                else
                                    k++;
                            }
                            arr.boysarr[i]["totalspent"] = total;
                            break;
                    }

                    console.log(arr.boysarr[i].name);
                    console.log(arr.boysarr[i].totalspent);

                }



            }
            break;



        case "2":
            for (i = 0; i < 7; i++) {
                var count = new Array(3);
                var l = 0;
                if (arr.boysarr[i].committed == "true") {
                    var ty = arr.boysarr[i].type;
                    while (k < 16 && count < 3) {

                        if (giftsarr[k].fro == " " && giftsarr[k].type == "essential" && l < 3) {
                            flag = 0;
                            for (i = 0; i < 3; i++) {
                                if (count[i] == "essential") {
                                    flag = 1;
                                    break;

                                }
                            }
                            if (flag == 0) {
                                var gname = arr.boysarr[i].girlname;
                                total = total + giftsarr[k].price;
                                giftsrr[k].to = gname;
                                giftsarr[k].from = boysarr[i].name
                                var print = arr.boysarr[i].name + "gave" + giftsarr[k].name + "to" + gname;
                                fs.appendFile("./gifts.txt", print + "\n", function (err) {
                                    if (err) {
                                        return err;
                                    }
                                });
                                k++;
                                count[l] = "essential";
                                l++;
                            }
                        }
                        if (giftsarr[k].fro == " " && giftsarr[k].type == "utility" && l < 3) {
                            flag = 0;
                            for (i = 0; i < 3; i++) {
                                if (count[i] == "utility") {
                                    flag = 1;
                                    break;

                                }
                            }
                            if (flag == 0) {
                                var gname = arr.boysarr[i].girlname;
                                total = total + giftsarr[k].price;
                                giftsrr[k].to = gname;
                                giftsarr[k].from = boysarr[i].name
                                var print = arr.boysarr[i].name + "gave" + giftsarr[k].name + "to" + gname;
                                fs.appendFile("./gifts.txt", print + "\n", function (err) {
                                    if (err) {
                                        return err;
                                    }
                                });
                                k++;
                                count[l] = "utility";
                                l++;
                            }
                        }
                        if (giftsarr[k].fro == " " && giftsarr[k].type == "luxury" && l < 3) {
                            flag = 0;
                            for (i = 0; i < 3; i++) {
                                if (count[i] == "luxury") {
                                    flag = 1;
                                    break;

                                }
                            }
                            if (flag == 0) {
                                var gname = arr.boysarr[i].girlname;
                                total = total + giftsarr[k].price;
                                giftsrr[k].to = gname;
                                giftsarr[k].from = boysarr[i].name
                                var print = arr.boysarr[i].name + "gave" + giftsarr[k].name + "to" + gname;
                                fs.appendFile("./gifts.txt", print + "\n", function (err) {
                                    if (err) {
                                        return err;
                                    }
                                });
                                k++;
                                count[l] = "luxury";
                                l++;
                            }
                        }
                        if (total < boysarr[i].budget) {
                            for (j = 0; j < 16; j++) {
                                if (giftsarr[j].from == "") {
                                    if (giftsarr[j].price + total < boysarr[i].budget) {
                                        var gname = arr.boysarr[i].girlname;
                                        total = total + giftsarr[k].price;
                                        giftsrr[j].to = gname;
                                        giftsarr[j].from = boysarr[i].name
                                        var print = arr.boysarr[i].name + "gave" + giftsarr[j].name + "to" + gname;
                                        fs.appendFile("./gifts.txt", print + "\n", function (err) {
                                            if (err) {
                                                return err;
                                            }
                                        });
                                    }
                                    else
                                        continue;
                                }


                            }
                        }



                    }

                }
            }

    }
}
