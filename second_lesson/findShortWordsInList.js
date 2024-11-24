

// Given a list of words, find and output the shortest words in the list, separated by spaces.

module.exports.findShortWordsInList = function(arr) {

let minLength = arr[0].length;

for(let i = 0; arr.length > i; i++) {

 if(arr[i].length < minLength){

    minLength = arr[i].length;
 }
}

const arrMinStrings = [];

for(let i = 0; arr.length > i; i++) {

    if(arr[i].length === minLength){
   
        arrMinStrings.push(arr[i]);
    }
   }

return arrMinStrings.join(" ");
}