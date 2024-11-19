
// 1 solution. Complexity N2

module.exports.FirstSolution = function(string) {

    let count = 0;
    let ans; 

for(let i = 0; string.length > i ; i++){

    const letter = string[i];

    let inner_count = 0;

    for(let j = 0; string.length  > j; j++){

        if (letter === string[j]) {
            inner_count++; 

        }
    }

    if(inner_count > count){

        count = inner_count;
        ans = letter;
    }
    
}

return ans;

}