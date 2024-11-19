// какой символ чаще всего повторяется?

// 3 solution. Complexity N + K

module.exports.ThirdSolution = function(string) {


    if(typeof string == "undefined") {

        throw new Error("You did not put arguments");
    }

    if(typeof string !== "string") {

        throw new Error("It's not a string");
    }
    if(string.trim() === "") {

        throw new Error("It's empty string");
    }

    if(Object.keys(arguments).length > 1) {

        throw new Error("Yot put more then one argument");
    }

    const dic = {};

    let count = 0
    let ans; 

    for(let i = 0; string.length > i ; i++){
    
        const key = string[i];
    
        if(dic.hasOwnProperty(key)){
    
            dic[key] = dic[key] + 1;
    
        } else {
    
            dic[key] = 1;
        }
        
    }
    
    const ArrayOfQuantityUniqeSymbol  = Object.values(dic);
    
    for(let i = 0; ArrayOfQuantityUniqeSymbol.length > i; i++) {
    
       if( ArrayOfQuantityUniqeSymbol[i] > count) {
    
        ans = Object.keys(dic)[i];
        count = ArrayOfQuantityUniqeSymbol[i];
       }
    
    };
    
   return ans


}
