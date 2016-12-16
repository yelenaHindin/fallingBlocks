if(process){
    console.log("1st task")
    var argSliced = process.argv.slice(2);
    
    console.log("args with slice:" + argSliced);

    argSliced.forEach(function(elm){console.log(elm);})
        
    console.log("2nd task")
    console.log(argSliced);
    var iterator = argSliced.entries();
    console.log(iterator);
    //for(var e in iterator){console.log(iterator[e])};
    for (var e in iterator) {
        console.log("iterator." + e + " = " + iterator[prop]);
    }
    
    console.log("3d task")
    
    function isHigherThen3(elm){
        return(!isNaN(elm) && (elm > 3));
    }
    
    console.log(argSliced.every(isHigherThen3));
}