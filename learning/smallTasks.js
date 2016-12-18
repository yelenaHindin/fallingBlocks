"use strict";

if(process){
    console.log("**********1st task**********")
    var argSliced = process.argv.slice(2);
    
    console.log("args with slice:[" + argSliced + "]");

    argSliced.forEach(function(elm){console.log(elm);})
        
    console.log("**********2nd task**********")
    var iterator = argSliced.entries();
    
    for(let e of iterator){console.log(e)};
    
    console.log("**********3d task**********")
    
    function isGreaterThen3(elm){
        return(!isNaN(elm) && (elm > 3));
    }
    
    console.log(argSliced.every(isGreaterThen3));
    
    console.log("**********4th task**********")
    
    var filtered = argSliced.filter(isGreaterThen3);
    
    console.log("array of numbers > 3: [" + filtered + "]");

    console.log("**********5th task**********")
    var ind,val;
    
    if((ind = argSliced.findIndex(isGreaterThen3)) > -1){
        console.log("Number is greater then 3 is founded(with findIndex):" + argSliced[ind]);
    }
    else {
        console.log("Number is greater then 3 is not founded(with findIndex)")
    }
    
    if((val = argSliced.find(isGreaterThen3)) != undefined){
        console.log("Number is greater then 3 is founded(with find):" + val);        
    }
    else {
        console.log("Number is greater then 3 is not founded(with find)")
    }
    console.log("**********6th task**********")
    function increaseBy5(elem){
        if(!isNaN(elem)){
            return Number(elem) + 5;
            
        }else {
            return elem + 5;            
        }
        
    }
    
    console.log("Increased by 5:[" + argSliced.map(increaseBy5) + "]")

    console.log("**********7th task**********")
    var maxElem = argSliced.reduce(function(a, b) {
        //return (a > b)? a: b;
        return Math.max(a,b);
    },-Infinity);
    
    console.log("max element:" + maxElem);

    console.log("**********8th task**********")
    var sumElems = argSliced.reduce(function(a, b) {
        //return (a > b)? a: b;
        return Number(a) + Number(b);
    },0);
    
    console.log("sum of elements:" + sumElems);
 
    console.log("**********9th task**********")
    var countElems = argSliced.reduce(function(a) {
        var c = 0;
        for(var i in a){
            if ( ! isNaN(i) ) {
                c++;
            }
        }
        return c;
    },0);
    
   console.log("count of elements in sparce array:" + countElems);
}