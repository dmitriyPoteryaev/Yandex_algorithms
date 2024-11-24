
// Given an array of integers. Your task is to find the smallest even number in the array. 
// If there are no even numbers in the array, 
// return a specific value (e.g., -1 or null, depending on the implementation).

module.exports.findMinEvenNumber = function(arr) {

    let ans = - 1

    let isFoundedNumber = false;

    for(let i = 0; arr.length > i; i++) {
        
     if( arr[i] % 2 === 0 &&  (!isFoundedNumber ||  arr[i] < ans) ) {

        ans = arr[i];
        isFoundedNumber = true;
     }
    
    }

    return ans;

}