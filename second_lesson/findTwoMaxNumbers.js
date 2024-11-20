
// Given an array of integers, find the two largest numbers. First, identify the largest number in the array. 
// Then, find the second-largest number while keeping the largest number in the array 
// (i.e., duplicates are allowed, and the largest number can appear twice).


module.exports.findTwoMaxNumbers = function(arr) {

    let max;
    let max2;

    if(arr[0] > arr[1]){

        max = 0;
        max2 = 1;
    } else {

        max = 1;
        max2 = 0;
    }
    
    for(let i = 0; arr.length > i; i++) {
        
        if(arr[i] > arr[max]){

            max2 = max;
            max = i;
        } else {

            max2 = i;
        }
    
    }

    return [arr[max], arr[max2]];

}